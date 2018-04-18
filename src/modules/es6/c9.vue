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

    <hr>

    <h4>9.6 属性的可枚举性</h4>
    <p>
      对象的每个属性都有一个描述对象（Descriptor），用于控制该属性的行为。Object.getOwnPropertyDescriptor方法可以获取该属性的描述对象。
    </p>
    <pre>
      <code>
        let obj = { foo: 123 }
        Object.getOwnPropertyDescriptor方法可以获取该属性
        // {
        //  value: 123,
        //  writable: true,
        //  enumerable: true,
        //  configurable: true
        // }
      </code>
    </pre>
    <p>
      描述对象的enumerable属性称为“可枚举性”，如果该属性为false，就表示某些操作慧忽略当前属性。
    </p>
    <p>
      ES5有3个操作慧忽略enumerable为false的属性。
    </p>
    <ul>
      <li>for...in循环：只遍历对象自身的和继承的可枚举属性。</li>
      <li>Object.keys()：返回对象自身的所有可枚举属性的键名。</li>
      <li>JSON.stringify()：只串行化对象自身的可枚举性。</li>
    </ul>
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
    },
    ccTest (...ab) {
      console.log()
    },
    makeCar ({ brand = '起亚', type = 'K5' }) {
      console.log(brand, type)
    }
  },
  created () {
    let arr1 = [1]
    let arr2 = [2]
    let arr3 = [3]
    let arr4 = [...arr1, ...arr2, ...arr3]
    console.log(arr4)
    let cc = {
      a: 1,
      b: 2
    }

    let nodelist = document.querySelectorAll('p')
    console.log([...nodelist])

    let map1 = new Map([[1, 'one'], [2, 'two'], [3, 'three']])
    console.log([...map1.keys()])
    console.log(this.recursion(3))
    this.ccTest(...Object.keys(cc))
    this.makeCar({ type: 'K7' })
  }
}
</script>
