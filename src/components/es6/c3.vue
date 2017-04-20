<template>
  <div class="article-detail">
    <h2>3.1 数组的结构赋值</h2>
    <h5>基本用法</h5>
    <p>ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构赋值（Destructuring）。</p>
    <p>以前，为变量赋值，只能直接指定值 <br> var a = 1; <br> var b = 2; <br> var c = 3;</p>
    <p>而ES6允许写成下面这样。<br> var [a, b, c] = [1, 2, 3];</p>
    <p>上面的代码表示，可以从数组中提取值，按照位置的对应关系对变量赋值。</p>
    <p>本质上，这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。下面是一些实用嵌套数组进行解构的例子。</p>
    <p>let [foo, [[bar], baz]] = [1, [[2], 3]]; <br> foo // 1 <br> bar // 2 <br> baz // 3</p>
    <p>let [ , , third] = ["foo", "bar", "baz"]; <br> third // "baz"</p>
    <p>let [x, , y] = [1, 2, 3] <br> x // 1 <br> y // 3</p>
    <p>let [head, ...tail] = [1, 2, 3, 4]; <br> head // 1 <br> tail // [2, 3, 4]</p>
    <p>let [x, y, ...z] = ['a']; <br> x // "a" <br> y // undefined <br> z // []</p>
    <p>如果结构不成功，变量的值就等于undefined。<br> var [foo] = []; <br> var [bar, foo] = [1]; <br> 以上两种情况都属于解构不成功，foo的值都会等于undefined。</p>
    <p>
      另一种情况是不完全解构，即等号左边的模式址匹配等号右边数组的一部分。这种情况下，结构依然可以成功。
      <br>
      let [x, y] = [1, 2, 3];
      <br>
      x // 1
      <br>
      y // 2
    </p>
    <p>
      let [a, [b], d] = [1, [2, 3], 4];<br>
      a // 1 <br>
      b // 2 <br>
      d // 4
    </p>
    <p>上面的两个例子都属于不完全解构，但是可以成功。</p>
    <p>如果等号的右边不是数组（或者严格地说，不是可遍历的结构，参见第14章），那么将会报错。</p>
    <p>
      <span class="">报错</span> <br>
      let [foo] = 1;<br>
      let [foo] = false;<br>
      let [foo] = NaN;<br>
      let [foo] = undefined;<br>
      let [foo] = null;<br>
      let [foo] = {};<br>
    </p>
    <p>上面的表达式都会报错，因为等号右边的值，要么转为对象以后不具备Iterator接口（前5个表达式），要么本身就不具备Iterator接口（最后一个表达式）。</p>
    <p>
      解构赋值不仅适用于var命令，也适用于let和const命令。
      <br> var [v1, v2, ..., vN] = array;
      <br> let [v1, v2, ..., vN] = array;
      <br> const [v1, v2, ..., vN] = array;
    </p>
    <p>对于Set结构，也可以使用数组的解构赋值。<br>let [x, y, z] = new Set(["a", "b", "c"]) <br> x // "a"</p>
    <p>
      事实上，只要某种数据结构具有Iterator接口，都可以采用数组形式的解构赋值。<br>
      function * fibs() {
        var a = 0;
        var b = 1;
        while (true) {
          yield a;
          [a, b] = [b, a + b];
        }
      }
    </p>
    <h5>默认值</h5>
    <p>解构赋值允许指定默认值。<br> var [foo = true] = []; <br> foo // true</p>
    <p>
      [x, y = 'b'] = ['a'] // x = 'a', y = 'b' <br>
      [x, y = 'b'] = ['a', undefined] // x = 'a', y = 'b' 
    </p>
    <p>
      注意，ES6内部使用严格相等运算符（===）判断一个位置是否有值。所以，如果一个数组成员不严格等于undefined，默认值是不会生效的。
      <br>
      var [x = 1] = [undefined];<br>
      x // 1
      <br>
      var [x = 1] = [null];<br>
      x // null
    </p>
    <p>上面的代码中，如果一个数组成员是null，默认值就不会生效，因为null不严格等于undefined。</p>
    <p>
      如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候才会求值。
      <br>
      let x;
      if ([1][0] === undefined) {
        x = f();
      } else {
        x = [1][0];
      }
    </p>
    <p>
      默认值可以引用解构赋值的其他变量，但该变量必须已经声明。<br>
      let [x = 1, y = x] = []; // x = 1; y = 1; <br>
      let [x = 1, y = x] = [2]; // x = 2; y = 2; <br>
      let [x = 1, y = x] = [1, 2]; // x = 1; y = 2; <br>
      let [x = y, y = 1] = []; // ReferenceError
    </p>
    <p>
      上面的最后一个表达式之所以会报错，是因为x用到默认值y时y还没有声明。
    </p>
    
    <hr>

    <h2>3.2 对象的的解构赋值</h2>
    <p>
      解构不仅可以用于数组，还可以用于对象。<br>
      var { foo, bar } = { foo: 'aaa', bar: 'bbb' };<br>
      foo // 'aaa' <br>
      bar // 'bbb'
    </p>
    <p>
      对象的解构与数组有一个重要的不同。数组的元素时按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。<br>
      var { bar, foo } = { foo: 'aaa', bar: 'bbb' }; <br>
      foo // 'aaa' <br>
      bar // 'bbb'
    </p>
    <p>
      bar { baz } = { foo: 'aaa', bar: 'bbb' }; <br>
      baz // undefined
    </p>
    <p>
      以上代码中的第一个例子，等号左边两个变量的次序与等号右边两个同名属性不一致，但是对取值完全没有影响。第二个例子中，变量没有对应的同名属性，导致取不到值，最后等于undefined。
    </p>
    <p>
      如果变量名与属性名不一致，必须写成下面这样。<br>
      var { foo: baz } = { foo: 'aaa', bar: 'bbb' };<br>
      baz // 'aaa'
    </p>
    <p>
      let obj = { first: 'hello', last: 'world' };<br>
      let { first: f, last: l } = obj;<br>
      f // 'hello'<br>
      l // 'world'
    </p>
    <p>
      这实际上说明，对象的解构赋值时以下形式的简写（参见第9章）。<br>
      var { foo: baz } = { foo: 'aaa', bar: 'bbb' };<br>
      baz // 'aaa'<br>
      foo // error: foo is not defined
    </p>
    <p>
      上面的代码中，真正被赋值的是变量baz，而不是模式foo。
    </p>
    <p>
      注意，采用这种写法时，变量的声明和赋值是一体的。对于let和const而言，变量不能重新声明，所以一旦赋值的变量以前声明过，就会报错。<br>
      let foo;<br>
      let { foo } = { foo: 1 }; // SyntaxError: Duplicate declaration "foo"
    </p>
    <p>
      let baz; <br>
      let { bar: baz } = { bar: 1 } // SyntaxError: Duplicate declaration "baz"
    </p>
    <p>
      上面的代码中，解构赋值的变量都会重新声明，所以报错了。不过，因为var命令允许重新声明，所以这个错误只会在使用let和const命令时出现。如果没有第二个let命令，上面的代码就不会报错。<br>
      let foo;<br>
      ({foo} = {foo: 1}); // 成功<br>
      let baz;<br>
      ({bar: baz} = {bar: 1}); // 成功
    </p>
    <p>
      和数组一样，解构也可以用于嵌套结构的对象。<br>
      var obj = {
        p: [
          "Hello", {
            y: "World"
          }
        ]
      };<br>
      var { p: [x, {y}]} = obj;<br>
      x // "Hello"<br>
      y // "World"
    </p>
    <p>
      注意，这时p是模式， 不是变量， 因此不会被赋值。
    </p>
    <pre>
      <code>
        var node = {
          loc: {
            start: {
              line: 1,
              column: 5
            }
          }
        };
      </code>
    </pre>
    <p>
      var {loc: {start: { line}}} = node;<br>
      line // 1 <br>
      loc // error: loc is undefined <br>
      start // error: start is undefined 
    </p>
    <p>
      上面的代码中，只有line是变量，loc和start都是模式，不会被赋值。
    </p>
    <p>
      下面是嵌套赋值的例子。<br>
      let obj = {};<br>
      let arr = [];<br>
      ({foo: obj.prop, bar: arr[0]} = {foo: 123, bar: true});<br>
      obj // {prop: 123} <br>
      arr // [true]
    </p>
    <p>
      对象的解构也可以指定默认值。<br>
      var {x = 3} = {};<br>
      x // 3 <br>
      var {x, y = 5} = {x: 1};<br>
      x // 1 <br>
      y // 5
    </p>
    <p>
      var { message: msg = "Something went wrong" } = {};<br>
      msg // "Something went wrong"
    </p>
    <p>
      默认值生效的条件是，对象的属性值严格等于undefined。
    </p>
    <p>
      var {x = 3} = {x: undefined};<br>
      x // 3 <br>
      var {x = 3} = {x: null};<br>
      x // null
    </p>
    <p>
      上面的代码中，如果x属性等于null，就不严格等于undefined，导致默认值不会生效。如果解构失败，变量的值等于undefined。<br>
      var {foo} = {bar: 'baz'} <br>
      foo / undefined
    </p>
    <p>
      如果解构模式是嵌套的对象，而且子对象所在的父属性不存在，那么将会报错。<br>
      // 报错<br>
      let {foo: {bar}} = {baz: 'baz'};
    </p>
    <p>
      上面代码中，等号左边对象的foo属性，对应一个子对象。该子对象的bar属性，解构时会报错。原因很简单，因为foo这时等于undefined，再取子属性就会报错，请看下面的代码。<br>
      var _tmp = {baz: 'baz'};<br>
      _tmp.foo.bar // 报错
    </p>
    <p>
      如果将一个已经声明的变量用于解构赋值，必须非常小心。<br>
      // 错误的写法 <br>
      var x; <br>
      {x} = {x: 1};<br>
      // SyntaxError: syntax error
    </p>
    <p>
      上面的代码写法会报错，因为JavaScript引擎会将{x}理解成一个代码块，从而发生语法错误。只有将大括号写在行首，避免JavaScript将其解释为代码块，才能解决这个问题。<br>
      // 正确的写法 <br>
      ({x} = {x: 1});
    </p>
    <p>
      上面代码将整个解构赋值语句，放在一个圆括号里面，就可以正确执行。关于圆括号与解构赋值的关系，参见下文。
    </p>
    <p>
      解构赋值允许，等号左边的模式之中，不放置任何变量名。因此，可以写出非常古怪的赋值表达式。<br>
      ({} = [true, false]);<br>
      ({} = 'abc');<br>
      ({} = []);
    </p>
    <p>
      上面的表达式虽然毫无意义，但是语法是合法的，可以执行。
    </p>
    <p>
      对象的解构赋值，可以很方便地将现有对象的方法，赋值到某个变量。<br>
      let { log, sin, cos } = Math;
    </p>
    <p>
      上面代码将Math对象的对数、正弦、余弦三个方法，赋值到对应的变量上，使用起来就会方便很多。
    </p>
    <p>
      由于数组本质是特殊的对象，因此可以对数组进行对象属性的解构。<br>
      let arr = [1, 2, 3]; <br>
      let {0 : first, [arr.length - 1] : last} = arr; <br>
      first // 1 <br>
      last // 3
    </p>
    <p>
      上面代码对数组进行对象解构。数组arr的0键对应的值是1，[arr.length - 1]就是2键，对应的值是3。方括号这种写法，属于“属性名表达式”，参见《对象的扩展》一章。
    </p>

    <hr>

    <h2>3.3 字符串的解析赋值</h2>
    <p>
      字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的对象。<br>
      const [a, b, c, d, e] = 'hello'; <br>
      a // "h" <br>
      b // "e" <br>
      c // "l" <br>
      d // "l" <br>
      e // "o"
    </p>
    <p>
      类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。<br>
      let {length : len} = 'hello';<br>
      len // 5
    </p>

    <hr>

    <h2>3.4 数值和布尔值的解构赋值</h2>
    <p>
      解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。<br>
      let {toString: s} = 123; <br>
      s === Number.prototype.toString // true <br>
      let {toString: s} = true; <br>
      s === Boolean.prototype.toString // true
    </p>
    <p>
      上面代码中，数值和布尔值的包装对象都有toString属性，因此变量s都能取到值。
    </p>
    <p>
      解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。<br>
      let { prop: x } = undefined; // TypeError <br>
      let { prop: y } = null; // TypeError
    </p>

    <hr>

    <h5>3.5 函数参数的解构赋值</h5>
    <p>
      函数的参数也可以使用解构赋值。
    </p>
    <pre>
      <code>
        function add([x, y]){
          return x + y;
        }

        add([1, 2]); // 3
      </code>
    </pre>
    <p>
      上面代码中，函数add的参数表面上是一个数组，但在传入参数的那一刻，数组参数就被解构成变量x和y。对于函数内部的代码来说，它们能感受到的参数就是x和y。
    </p>
    <p>
      下面是另一个例子。<br>
      [[1, 2], [3, 4]].map(([a, b]) => a + b);<br>
      // [ 3, 7 ]
    </p>
    <p>
      函数参数的解构也可以使用默认值。
    </p>
    <pre>
      <code>
        function move({x = 0, y = 0} = {}) {
          return [x, y];
        }

        move({x: 3, y: 8}); // [3, 8]
        move({x: 3}); // [3, 0]
        move({}); // [0, 0]
        move(); // [0, 0]
      </code>
    </pre>
    <p>
      上面代码中，函数move的参数是一个对象，通过对这个对象进行解构，得到变量x和y的值。如果解构失败，x和y等于默认值。
    </p>
    <p>
      注意，下面的写法会得到不一样的结果。
    </p>
    <pre>
      <code>
        function move({x, y} = { x: 0, y: 0 }) {
          return [x, y];
        }

        move({x: 3, y: 8}); // [3, 8]
        move({x: 3}); // [3, undefined]
        move({}); // [undefined, undefined]
        move(); // [0, 0]
      </code>
    </pre>
    <p>
      上面代码是为函数move的参数指定默认值，而不是为变量x和y指定默认值，所以会得到与前一种写法不同的结果。
    </p>
    <p>
      undefined就会触发函数参数的默认值。<br>
      [1, undefined, 3].map((x = 'yes') => x);<br>
      // [ 1, 'yes', 3 ]
    </p>
    
    <hr>

    <h2>3.6 圆括号问题</h2>
    <p>解构赋值虽然很方便，但是解析起来并不容易。对于编译器来说，一个式子到底是模式，还是表达式，没有办法从一开始就知道，必须解析到（或解析不到）等号才能知道。</p>
    <p>由此带来的问题是，如果模式中出现圆括号怎么处理。ES6的规则是，只要有可能导致解构的歧义，就不得使用圆括号。</p>
    <p>但是，这条规则实际上不那么容易辨别，处理起来相当麻烦。因此，建议只要有可能，就不要在模式中放置圆括号。</p>
    <h5>不能使用圆括号的情况</h5>
    <p>以下三种解构赋值不得使用圆括号。</p>
    <p>
      （1）变量声明语句中，不能带有圆括号。<br>
    </p>
    <pre>
      <code>
        // 全部报错 <br>
        let [(a)] = [1]; <br>

        let {x: (c)} = {}; <br>
        let ({x: c}) = {}; <br>
        let {(x: c)} = {}; <br>
        let {(x): c} = {}; <br>

        let { o: ({ p: p }) } = { o: { p: 2 } };    
      </code>
    </pre>
    <p>
      上面三个语句都会报错，因为它们都是变量声明语句，模式不能使用圆括号。
    </p>
    <p>（2）函数参数中，模式不能带有圆括号。</p>
    <p>
      函数参数也属于变量声明，因此不能带有圆括号。<br>
      // 报错<br>
      function f([(z)]) { return z; }
    </p>
    <p>
      （3）赋值语句中，不能将整个模式，或嵌套模式中的一层，放在圆括号之中。
    </p>
    <pre>
      <code>
        // 全部报错
        ({ p: a }) = { p: 42 };
        ([a]) = [5];
      </code>
    </pre>
    <p>上面代码将整个模式放在圆括号之中，导致报错。</p>
    <pre>
      <code>
        // 报错
        [({ p: a }), { x: c }] = [{}, {}];
      </code>
    </pre>
    <p>上面代码将嵌套模式的一层，放在圆括号之中，导致报错。</p>
    <h5>可以使用圆括号的情况</h5>
    <p>可以使用圆括号的情况只有一种：赋值语句的非模式部分，可以使用圆括号。</p>
    <pre>
      <code>
        [(b)] = [3]; // 正确
        ({ p: (d) } = {}); // 正确
        [(parseInt.prop)] = [3]; // 正确
      </code>
    </pre>
    <p>上面三行语句都可以正确执行，因为首先它们都是赋值语句，而不是声明语句；其次它们的圆括号都不属于模式的一部分。第一行语句中，模式是取数组的第一个成员，跟圆括号无关；第二行语句中，模式是p，而不是d；第三行语句与第一行语句的性质一致。</p>
    
    <hr>

    <h2>3.7 用途</h2>
    <p>变量的解构赋值用途很多。</p>
    <h5>交换变量的值</h5>
    <pre>
      <code>
        let x = 1;
        let y = 2;

        [x, y] = [y, x];
      </code>
    </pre>
    <p>上面代码交换变量x和y的值，这样的写法不仅简洁，而且易读，语义非常清晰。</p>
    <h5>从函数返回多个值</h5>
    <p>函数只能返回一个值，如果要返回多个值，只能将它们放在数组或对象里返回。有了解构赋值，取出这些值就非常方便。</p>
    <pre>
      <code>
        // 返回一个数组

        function example() {
          return [1, 2, 3];
        }
        let [a, b, c] = example();

        // 返回一个对象

        function example() {
          return {
            foo: 1,
            bar: 2
          };
        }
        let { foo, bar } = example();
      </code>
    </pre>
    <h5>函数参数的定义</h5>
    <p>解构赋值可以方便地将一组参数与变量名对应起来。</p>
    <pre>
      <code>
        // 参数是一组有次序的值
        function f([x, y, z]) { ... }
        f([1, 2, 3]);

        // 参数是一组无次序的值
        function f({x, y, z}) { ... }
        f({z: 3, y: 2, x: 1});

      </code>
    </pre>
    <h5>提取JSON数据</h5>
    <p>解构赋值对提取JSON对象中的数据，尤其有用。</p>
    <pre>
      <code>
        let jsonData = {
          id: 42,
          status: "OK",
          data: [867, 5309]
        };

        let { id, status, data: number } = jsonData;

        console.log(id, status, number);
        // 42, "OK", [867, 5309]
      </code>
    </pre>
    <p>上面代码可以快速提取 JSON 数据的值。</p>
    <h5>函数参数的默认值</h5>
    <pre>
      <code>
        jQuery.ajax = function (url, {
          async = true,
          beforeSend = function () {},
          cache = true,
          complete = function () {},
          crossDomain = false,
          global = true,
          // ... more config
        }) {
          // ... do stuff
        };
      </code>
    </pre>
    <p>指定参数的默认值，就避免了在函数体内部再写var foo = config.foo || 'default foo';这样的语句。</p>
    <h5>遍历Map结构</h5>
    <p>任何部署了Iterator接口的对象，都可以用for...of循环遍历。Map结构原生支持Iterator接口，配合变量的解构赋值，获取键名和键值就非常方便。</p>
    <pre>
      <code>
        var map = new Map();
        map.set('first', 'hello');
        map.set('second', 'world');

        for (let [key, value] of map) {
          console.log(key + " is " + value);
        }
        // first is hello
        // second is world
      </code>
    </pre>
    <p>如果只想获取键名，或者只想获取键值，可以写成下面这样。</p>
    <pre>
      <code>
        // 获取键名
        for (let [key] of map) {
          // ...
        }

        // 获取键值
        for (let [,value] of map) {
          // ...
        }
      </code>
    </pre>
    <h5>输入模块的指定方法</h5>
    <p>加载模块时，往往需要指定输入哪些方法。解构赋值使得输入语句非常清晰。</p>
    <pre>
      <code>
        const { SourceMapConsumer, SourceNode } = require("source-map");
      </code>
    </pre>
  </div>
</template>

<script>

export default {
  name: 'c1',
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
