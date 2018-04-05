<template>
  <div class="article-detail">
    <h2>8.1 函数参数的默认值</h2>
    <h4>基本用法</h4>
    <p>
      在ES6之前，不能直接为函数的参数指定默认值，只能采用变通的方法。
    </p>
    <pre>
      <code>
        function log(x, y) {
          y = y || 'World'
          console.log(x, y)
        }

        log('Hello') // Hello World
        log('Hello', 'China')  Hello China
        log('Hello', '') // Hello World
      </code>
    </pre>
    <p>
      上面的代码检查函数log的参数y有没有赋值，如果没有，则指定默认值为World。这种写法的缺点在于，如果参数y赋值了，但是对应的布尔值为false，则改赋值不起作用。就像以上代码的最后一行，参数y等于空字符，结果被改为默认值。
    </p>
    <p>
      为了避免这个问题，通常需要先判断一下参数y是否被赋值，如果没有，在等于默认值。这有两种写法
    </p>
    <pre>
      <code>
        // 写法一
        if (typeof y === 'undefined') y = 'World'

        // 写法二
        if (arguments.length === 1) y = 'World'
      </code>
    </pre>
    <p>
      ES6允许为函数的参数设置默认值。即直接写在参数定义的后面。
    </p>
    <pre>
      <code>
        function log(x, y = 'World') console.log(x, y)

        log('Hello') // Hello World
        log('Hello', 'China')  Hello China
        log('Hello', '') // Hello
      </code>
    </pre>
    <p>
      可以看到，ES6的写法比ES5简洁许多，而且非常自然。下面是另一个例子。
    </p>

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
  name: 'c6',
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
    recursion (num) {
      if (num <= 1) {
        return 1
      } else {
        return num + this.recursion(num - 1)
      }
    }
  },
  created () {
    let arr1 = [1]
    let arr2 = [2]
    let arr3 = [3]
    let arr4 = [...arr1, ...arr2, ...arr3]
    console.log(arr4)

    let nodelist = document.querySelectorAll('p')
    console.log([...nodelist])

    let map1 = new Map([[1, 'one'], [2, 'two'], [3, 'three']])
    console.log([...map1.keys()])
    console.log(this.recursion(3))
  }
}
</script>
