<template>
  <div class="article-detail">
    <h2>5.1 RegExp 构造函数</h2>
    <p>在ES5中，RegExp构造函数只能接受字符串作为参数。</p>
    <pre>
      <code>
        var regex = new RegExp("xyz", "i");
        //等价于
        var regex = /xyz/i;
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
  },
  created () {
  }
}
</script>
