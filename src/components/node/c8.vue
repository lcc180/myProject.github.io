<template>
  <div class="article-detail">
    <p>如今看来，Web应用俨然是互联网的主角，伴随Web1.0，Web2.0一路走来，HTTP占据了网络中的大多数流量。随着移动互联网时代的到来，Web又开始在移动浏览器上发挥光和热。在Web标准化的努力过后，Web又开始朝向应用话发展，JavaScript在前端变得炙手可热。许多原本在服务器端实现的业务细节，纷纷前移到浏览器端，前端MV*的架构也日趋成熟。与之逆流的是，NOde的出现将前后端的壁垒再次打破，Javascript这门最初就能运行在服务器端端语言，在经历了前端的辉煌和后端的低迷后，借助事件驱动和V8的高性能，再次成为了服务器端的佼佼者。在Web应用中，JavaScript将不再仅仅出现在前端浏览器中，因为Node的出现，“前端”将会被重新定义。</p>
    <p>为了胜任Web应用的开发工作，各种语言，模式，框架层出不穷。但从框架而言，在后端数的出来大名的就有Struts，CodeIgniter，Rails，Django，web.py等，在前端也有知名的BackBone，<a href="">Knockout.js</a>，AngularJS，Meteor等。在Node中，有Connect中间件，也有Express这样的MVC框架。值得注意的是Meteor框架，它在后端是Node，在前端是Javascript，它是一个融合了前后端JavaScript的框架。</p>
    <p>由于前后端采用的语言都是JavaScript，在跨越HTTP进行沟通时，会有一些额外的好处。</p>
    <ul>
      <li>无需切换语言环境，部分知识不会因为语言韩晶的切换而丢失，上下文一致性较好。</li>
      <li>数据（因为JSON）可以很好地实现跨前后端直接使用。</li>
      <li>一些业务（如模版渲染）可以很自由的轻量地选择是在前端还是后端进行，因为编程语言相同，所以切换代价小。</li>
    </ul><br>

    <h2>8.1 基础功能</h2>
    <p>在第7章中，我们介绍Node的网络编程部分。从中我们可以发现，Node是十分贴近网络协议的，它的非阻塞，事件机制使得我们在网络编程时十分轻便。而本章的Web应用方面的内容，将从http模块中服务器端request事件开始分析。request事件发生于网络连接建立，客户端向服务器端发送报文，服务器端解析报文，发现HTTP请求的抱头时。在已触发request事件前，它已准备好ServerRequest和ServerResponse对象以供对请求和响应报文的操作。</p>
    <p>以官方经典的Hello World为例，就是调用ServerResponse实现响应的，如下所示：</p>
    <pre>
      <code>
        var http = require('http');
        http.createServer(function (req, res) {
          res.writeHead(200, {'Content-Type': 'text/plain'});
          res.end('Hello World\n');
        }).listen(1337, '127.0.0.1');
        console.log('Server running at http://127.0.0.1:1337/');
      </code>
    </pre>
    <p>ES6允许RegExp构造函数接受正则表达式作为参数，这是会返回一个原有正则表达式的拷贝。</p>
    <pre>
      <code>
        var regex = new RegExp(/xyz/i);
      </code>
    </pre>
    <p>如果使用RegExp构造函数的第2个参数指定修饰符，则返回的正则表达式会忽略原有的正则表达式的修饰符，只使用新指定的修饰符。</p>
    <pre>
      <code>
        new RegExp(/ab/ig, 'i').flags
        // "i"
      </code>
    </pre>

    <hr>

    <h2>5.2 字符串的正则方法</h2>
    <p>虽然我们知晓了如何设置缓存，以达到节省网络带宽的目的，但是缓存一旦设定，当服务器端意外更新内容时，却无法通知客户端更新。这使得我们在使用缓存时也要为其设定版本号，所幸浏览器时根据URL进行缓存，那么一旦内容有所更新时，我们就让浏览器发起新的URL请求，使得新内容能够被客户端更新。一般的更新机制有如下两种。</p>
    <ul>
      <li>每次发布，</li>
    </ul>

    <hr>

    <h2>5.3 u修饰符</h2>
    <p>ES6对正则表达式添加了u修饰符，含义为“Unicode模式”，用来正确处理大于\uFFFF的Unicode字符。也就是说，会正确处理四个字节的UTF-16编码。</p>
    <pre>
      <code>
        /^\uD83D/u.test('\uD83D\uDC2A')
        // false
        /^\uD83D/.test('\uD83D\uDC2A')
        // true
      </code>
    </pre>
    <p>上面代码中，\uD83D\uDC2A是一个四个字节的UTF-16编码，代表一个字符。但是，ES5不支持四个字节的UTF-16编码，会将其识别为两个字符，导致第二行代码结果为true。加了u修饰符以后，ES6就会识别其为一个字符，所以第一行代码结果为false。</p>
    <p>一旦加上u修饰符号，就会修改下面这些正则表达式的行为。</p>
  </div>
</template>

<script>
export default {
  name: 'nodeC8',
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
