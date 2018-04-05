<template>
  <div class="article-detail">
    <p>
      从缓存家在的优化策略使得二次引入时不需要路径分析，文件定位和编译执行的过程，大大提高了再次加载模块时的效率。
    </p>
    <p>
      但在文件的定位过程中，还有一些细节需要注意，这主要包括文件拓展名的分析，目录和包的处理。
    </p>
    <ul>
      <li>
        文件拓展名分析
        <p>require()在分析标识符的过程中，会出现标识符中不包含文件拓展名的情况。CommonJS模块规范也允许在标识符中不包含文件拓展名，这种情况下，Node会按.js，.node，.json的次序不足扩展名，依次尝试。</p>
        <p>
          在尝试的过程中，需要调用fs模块同步阻塞式地判断文件是否存在。因为Node是单线程的，所以这里是一个会引起性能问题的地方。小诀窍是如果是.node和.json文件，在传递给require()的标识符中带上扩展名，会加快一点速度。另一个小诀窍是：同步配合缓存，可以大幅度缓存Node单线程中阻塞式调用的缺陷。
        </p>
      </li>
      <li>
        目标分析和包
        <p>在分析标识符的过程中，require()通过分析文件扩展名之后，可能没有查找到对应文件，但却得到一个目录，这在引入自定义模块和逐个模块路径进行查找时经常会出现，此时Node会将目录当作一个包来处理。</p>
        <p>
          在这个过程中，Node对CommonJS包规范进行了一定程度的支持。首先，Node在当前目录下查找package.json（CommonJS包规范定义的包描述文件），通过JSON.parse()解析出包描述对象，从中取出main属性指定的文件名进行定位。如果文件名缺少扩展名，将会进入扩展名分析的步骤。
        </p>
        <p>
          而如果main属性指定的文件名错误，或者压根没有package.json文件，Node会将index当作默认文件名，然后依次查找index.js，index.node，index.json。
        </p>
        <p>
          如果在目录分析的过程中没有定位成功任何文件，则自定义模块进入下一个模块路径进行查找。如果模块路径数组都被遍历完毕，依然没有查找到目标文件，则会抛出查找失败的异常。
        </p>
      </li>
    </ul>
    <p></p>
    <hr>
    <h2>2.2.3 模块编译</h2>
    <p>在Node中，每个文件模块都是一个对象，它的定义如下：</p>
    <pre>
      <code>
        function Mode(id, parent) {
          this.id = id;
          this.exports = {};
          this.parent = parent;
          if (parent && parent.children) {
            parent.children.push(this);
          }

          this.filename = null;
          this.loaded = false;
          this.children = [];
        }
      </code>
    </pre>
    <p>
      编译和执行是引入文件模块的最后一个阶段。定位到具体的文件后，Node会新建一个模块对象，然后根据路径载入并编译。对于不同的文件扩展名，其载入方法也有所不同，具体如下所示。
    </p>
    <ul>
      <li>
        .js文件。通过fs模块同步读取文件后编译执行。
      </li>
      <li>
        .node文件。这是用C/C++编写的扩展文件，通过dlopen()方法加载最后编译生成的文件。
      </li>
      <li>
        .json文件。通过fs模块同步读取文件后，用JSON.parse()解析返回结果。
      </li>
      <li>
        其余扩展名文件。他们都会被当作.js文件载入。
      </li>
    </ul>
    <p>
      每一个编译成功的模块都会将其文件路径作为索引缓存在Module._cache对象上，以提高二次引入的性能。
    </p>
    <p>
      根据不同的文件扩展名，Node会调用不同的读取方式，如.json文件的调用如下
    </p>
    <pre>
      <code>
        // Native extension for .json
        Module._extensions['.json'] = function (module, filename) {
          var content = NativeModule.require('fs').readFileSync(filename, 'utf8');
          try {
            module.exports = JSON.parse(stripBOM(content));
          } catch (err) {
            err.message = filename + ': ' + err.message;
            throw err;
          }
        }
      </code>
    </pre>
    <p>其中，Module._extensions会被复制给require()的extensions属性，所以通过代码访问require.extensions可以知道系统中已有的扩展加载方式。编写如下代码测试一下：</p>
    <pre>
      <code>
        console.log(require.extensions);
      </code>
    </pre>
    <p>
      得到的执行结果如下：
    </p>
    <pre>
      <code>
        { '.js': [Function], '.json: [Function', '.node': [Function] }
      </code>
    </pre>
    <p>
      如果想对自定义的扩展名进行特殊的加载，可以通过类似require.extensions['.ext']的方式实现。早起的CoffeeScript文件就是通过添加require.extensions['.coffee']扩展的方式来实现加载的。但是从V0.10.6版本开始，官方不鼓励通过这种方式来进行自定义扩展名的加载，而是期望先将其它语言或文件编译成JavaScript文件后再加载，这样做的好处在于不将繁琐的编译加载灯过程引入Node的执行过程中。
    </p>
    <p>
      在确定文件的扩展名之后，Node将调用具体的编译方式来将文件执行后返回给调用着。
    </p>
    <h5>1.JavaScript模块的编译</h5>
    <p>
      回到CommonJS模块规范，我们知道每个模块文件中存在着require，exports，module着3个变量，但是他们在模块文件中并没有定义，那么从何而来呢？甚至在Node的API文档中，我们知道每个模块中还有_filename,_dirname这两个变量的存在，它们有事从何而来的呢？如果我们把直接定义模块的过程放诸在浏览器端，会存在污染全局变量的情况。
    </p>
    <p>
      事实上，在编译的过程中，Node对获取的JavaScript文件内容进行了头尾包装。在头部添加了(function (exports, require, module, _filename, _dirname) { \n，在尾部添加了 \n });。一个正常的JavaScript文件会被包装成如下的样子：
    </p>
    <pre>
      <code>
        (function (exports, require, module, _filename, _dirname) {
          var math = require('math');
          exports.area = function (radius) {
            return Math.PI * radius * radi
          };
        });
      </code>
    </pre>
    <p>
      这样每个模块文件之间都进行了作用域隔离。包装之后的代码会通过vm原生模块的runInThisContext()方法执行(类似eval，只是具有明确上下文，不污染全局)，返回一个具体的function对象。最后，将当前模块对象的exports属性，require()方法，module(模块对象自身),以及在文件定位中得到的完整文件路径和文件目录作为参数传递给这个function()执行。
    </p>
    <p>
      这就是这些变量并没有定义在每个模块文件却存在的原因。在执行之后，模块的exports属性被返回给了调用方。exports属性上的任何方法和属性都可以被外部调用到，但是模块中的其余变量或属性则不可直接被调用。
    </p>
    <p>
      至此，require,exports,module的流程已经完整，这就是Node对CommonJS模块规范的实现。
    </p>
    <p>
      
    </p>
    <hr>
    <h5>6.5 总结</h5>
    <p>体验过JavaScript友好的字符串操作后，有些开发者可能会形成思维定势，将Buffer当作字符串来理解。但字符串与Buffer之间有实质上的差异，即Buffer时二进制数据，字符串与Buffer之间存在编码关系。因此，理解Buffer的诸多细节十分必要，对于如何搞笑处理二进制数据十分有用。</p>
    <hr>
    <h2>6.6 参考资源</h2>
    <p>体验过JavaScript友好的字符串操作后，有些开发者可能会形成思维定势，将Buffer当作字符串来理解。但字符串与Buffer之间有实质上的差异，即Buffer时二进制数据，字符串与Buffer之间存在编码关系。因此，理解Buffer的诸多细节十分必要，对于如何搞笑处理二进制数据十分有用。</p>
  </div>
</template>

<script>
export default {
  name: 'nodeC5',
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
  },
  created () {
  }
}
</script>
