<template>
  <div class="article-detail">
    <p>
      Node是一个面向网络而生的平台，它具有事件驱动，无阻塞，单线程等特性，具备良好的可伸缩性，使得它十分轻量，适合在分布式网络中扮演各种各样的角色。同时Node提供的API十分贴合网络，适合用它基础的API构建灵活的网络服务。从本章起，我将介绍Node在网络服务器方面的具体能力。
    </p>
    <p>
      利用Node可以十分方便地搭建网络服务器。在Web领域，大多数的编程语言需要专门的Web服务器作为容器，如ASP，ASP.NET需要IIS作为服务器，PHP需要搭载Apache或Nginx环境等，JSP需要Tomcat服务器等。但对于Node而言，只需要几行代码即可构建服务器，无需额外的容器。
    </p>
    <p>
      Node提供了net，dgram，http，https这4个模块，分别用于处理TCP，UDP，HTTP，HTTPS，适用于服务器端和客户端。
    </p>
    <hr>
    <h2>7.1 构建TCP服务</h2>
    <p>
      TCP服务在网络应用中十分常见，目前大多数的应用都是基于TCP搭建而成的。
    </p>
    <hr>
    <h4>7.1.1 TCP</h4>
    <p>TCP全名为传输控制协议，在OSI模型（由七层组成，分别为物理层，数据链接层，网络层，传输层，会话层，表示层，应用层）中属于传输层协议。许多应用层协议基于TCP构建，典型的是HTTP，SMTP，IMAP等协议。七层协议示意图如图7-1所示。</p>
    <p>TCP是面向连接的协议，其显著的特征是在传输之前需要3次握手形成会话，如下图</p>
    <p>只有会话形成之后，服务器端和客户端之间才能互相发送数据。在创建会话的过程中，服务器端和客户端分别提供一个套接字，这两个套接字共同形成一个连接。服务器端与客户端则通过套接字实现两者之间连接的操作。</p>
    <hr>
    <h4>7.1.2 创建TCP服务器端</h4>
    <p>在基本了解TCP的工作原理之后，我们可以开始创建一个TCP服务器来接受网络请求，代码如下：</p>
    <pre>
      <code>
        var net = require('net');

        var server = net.createServer(function (socket) {
          // 新的连接
          socket.on('data', function (data) {
            socket.write('你好');
          });

          socket.on('end', function (data) {
            socket.write('连接断开');
          });
          socket.write('欢迎观临《深入浅出Node.js》示例：\n');
        });

        server.listen(8124, function () {
          console.log('server bound');
        })
      </code>
    </pre>
    <p>我们通过net.createServer(listener)即可创建一个TCP服务器，listener是连接事件connection的侦听器，也可以采用如下的方式进行侦听：</p>
    <pre>
      <code>
        var server = net.createServer();
        server.on('connection', function (socket) {
          // 新的连接
        });
        server.listen(8124);
      </code>
    </pre>
    <p>我们可以利用Telnet工具作为客户端对刚才创建的简单服务器进行会话交流，相关代码如下所示：</p>
    <pre>
      <code>
        $ telnet 127.0.0.1 8124
        Trying 127.0.0.1...
        Connected to localhost.
        Escape character is '^]'.
        欢迎观临《深入浅出Node.js》示例：
        hi
        你好
      </code>
    </pre>
    <hr>
    <h4>7.1.3 TCP服务的事件</h4>
    <p>在上述的示例中，代码分为服务器事件和连接事件。</p>
    <h5>1. 服务器事件</h5>
    <p>对于通过net.createServer()创建的服务器而言，它是一个EventEmitter实例，它的自定义事件有如下几种</p>
    
  </div>
</template>

<script>
export default {
  name: 'nodeC7',
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
