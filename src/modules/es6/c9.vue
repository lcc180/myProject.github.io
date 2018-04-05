<template>
  <div class="article-detail">
    <h4>9.5 Object.assign()</h4>
    <p>
      Object.assign方法用来将源对象（source）的所有可枚举属性复制到目标对象（target）。它至少需要两个对象作为参数，第一个参数是目标对象，后面的参数都是源对象。只要有一个参数不是对象，就会抛出TypeError错误。
    </p>
    <pre>
      <code>
        var target = {a: 1};

        var source1 = { b: 2 };
        var source2 = { c: 3 };

        Object.assign(target, source1, source2);
        target // {a: 1, b:2, c: 3}
      </code>
    </pre>
    <p>
      注意，如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性。
    </p>
    <pre>
      <code>
        let target = { a: 1, b: 1}

        var source1 = { b: 2, c: 2 };
        var source2 = { c: 3 };

        Object.assign(target, source1, source2);
        target // {a: 1, b:2, c: 3}
      </code>
    </pre>
    <p>
      Object.assign只复制自身属性，不可枚举的属性（enumerable为false）和继承的属性不会被复制。
    </p>
    <pre>
      <code>
        Object.assign({b: 'c'}, Object.defineProperty({}, 'invisible', {
          enumerable: false,
          value: 'hello'
        }))
        // {b: 'c'}
      </code>
    </pre>
    <p>
      上面的代码中，Object.assign要复制的对象只有一个不可枚举的属性invisible，这个属性并没有被复制进去。
    </p>
    <p>
      属性名为Symble值的属性，也会被Object.assign复制。
    </p>
    <pre>
      <code>
        Object.assign({a: 'b'}, {[Symbol('c')]: 'd'})

        // {a: 'b', Symble(c): 'd'}
      </code>
    </pre>
    <p>
      对于嵌套的对象，Object.assign的处理方法是替换，而不是添加。
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
    let cc = {}

    let nodelist = document.querySelectorAll('p')
    console.log([...nodelist])

    let map1 = new Map([[1, 'one'], [2, 'two'], [3, 'three']])
    console.log([...map1.keys()])
    console.log(this.recursion(3))
    console.log(cc.constructor)
  }
}
</script>
