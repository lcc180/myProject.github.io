<template>
  <div class="article-detail">
    <h2>16.1 Promise的含义</h2>
    <p>Promise在JavaScript语言早有实现，ES6将其写进了语言标准，统一了用法，并原生提供了Promise对象。</p>
    <p>所谓Promise，就是一个对象，用来传递异步操作的信息。它代表了某个未来才会知道结果的事件（通常是一个异步操作），并且这个事件提供统一的API，可供进一步处理。</p>
    <p>Promise对象有以下两个特点。</p>
    <ol>
      <li>对象的状态不受外界的影响。Promise对象代表一个异步操作，有3种状态：Pending（进行中），Resolved（已完成，又称Fulfilled）和Rejected（已失败）。只有异步操作的结果可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是“Promise”这个名字的由来，它在英语中意思就是“承诺”，表示其他手段无法改变。</li>
      <li>
        一旦状态改变就不会再变，任何时候都可以得到这个结果。Promise的状态改变只有两种可能：从Pending变为Resolved和从Pending变为Rejected。只要其中之一发生，状态就凝固了，不会再变，会一直保持这个结果。就算改变已经发生，你再对Promise对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同。时间的特点是，如果你错过了它，再去监听是得不到结果的。
      </li>
    </ol>
    <p>有了Promise对象，就可以将异步的操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。此外，Promise对象提供统一的借口，使得控制异步操作更加容易。</p>
    <p>Promise也有一些缺点。首先，无法取消Promise，一旦新建它就会立即执行，无法中途取消。其次，如果不设置回调函数，Promise内部抛出的错误不会反应到外部。再者，当处于Pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。</p>
    <p>如果某些事件不断地反复发生，一般说来，使用Stream模式是比部署Promise更好的选择</p>
    <hr>
    <h2>16.2 基本用法</h2>
    <p>ES6规定，Promise对象是一个构造函数，用来生成Promise实例。</p>
    <p>下面的代码创建了一个Promise实例。</p>
    <pre>
      <code>
        let promise = new Promise(function (resolve, reject) {
          let client = new XMLHttpRequest()
          client.open('GET', url)
          client.onreadystatechange = handler
          client.responseType = 'json'
          client.setRequestHeader('Accept', 'application/json')
          client.send()

          function handler () {
            if (this.readyState !== 4) {
              return
            }
            if (this.status === 200) {
              resolve(this.response)
            } else {
              reject(new Error(this.statusText))
            }
          }
        })
        return promise
      </code>
    </pre>
    <p>上面的代码中，getJson是对XMLHttpRequest对象的封装，用于发出一个针对JSON数据的HTTP请求，并返回一个Promise对象。需要注意的是，在getJson内部，resolve函数和reject函数调用时都带有参数。</p>
    <p>如果调用resolve函数和reject函数时带有参数，那么这些参数会被传递给回调函数。reject函数的参数通常是Eoor对象的实例，表示抛出的错误；resolve函数的参数除了正常的值外，还可能是另一个Promise实例，表示异步操作的结果有可能是一个值，也有可能是另一个异步操作，比如像下面这样。</p>
    <pre>
      <code>
        let p1 = new Promise(function(resolve, reject) {
          // ...
        })

        let p2 = new Promise(function(resolve, reject) {
          // ...
          resolve(p1);
        })
      </code>
    </pre>
    <p>上面的代码中，p1和p2都是Promise的实例，但是p2的resolve方法将p1作为参数，即一个异步操作的结果是返回另一个异步操作。</p>
    <pre>
      <code>
        new RegExp(/ab/ig, 'i').flags
        // "i"
      </code>
    </pre>

    <hr>

    <h2>5.2 字符串的正则方法</h2>
    <p>字符串对象共有4个方法，可以使用正则表达式：match()、replace()、search()和split()。</p>
    <p>ES6将这4个方法，在语言内部全部调用RegExp的实例方法，从而做到所有与正则相关的方法，全都定义在RegExp对象上。</p>
    <ul>
      <li>String.prototype.match 调用 RegExp.prototype[Symbol.match]</li>
      <li>String.prototype.replace 调用 RegExp.prototype[Symbol.replace]</li>
      <li>String.prototype.search 调用 RegExp.prototype[Symbol.search]</li>
      <li>String.prototype.split 调用 RegExp.prototype[Symbol.split]</li>
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
  name: 'c5',
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
    myPromise (ms) {
      return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done')
      })
    },
    loadImageAsync (url) {
      return new Promise(function (resolve, reject) {
        let image = new Image()
        image.onload = function () {
          resolve(image)
        }
        image.onerror = function () {
          reject(new Error('could not load image at' + url))
        }
        image.src = url
      })
    },
    getJSON (url) {
      let promise = new Promise(function (resolve, reject) {
        let client = new XMLHttpRequest()
        client.open('GET', url)
        client.onreadystatechange = handler
        client.responseType = 'json'
        client.setRequestHeader('Accept', 'application/json')
        client.send()

        function handler () {
          if (this.readyState !== 4) {
            return
          }
          if (this.status === 200) {
            resolve(this.response)
          } else {
            reject(new Error(this.statusText))
          }
        }
      })
      return promise
    }
  },
  activated () {
    let timeout = this.myPromise(2000)
    timeout.then((value) => {
      console.log(value)
    })
  }
}
</script>
