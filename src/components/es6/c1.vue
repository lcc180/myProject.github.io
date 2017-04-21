<template>
  <div>
     <h2>2.5 全局对象的属性</h2>
      <p>全局对象是最顶层的对象，在浏览器环境指的是window对象，在Node.js中指的是global对象。在ES5中，全局对象的属性与全局变量是等价的。</p>
      <p>window.a = 1 <br> a // 1</p>
      <p>a = 2; <br> window.a // 2</p>
      <p>上面的代码中，全局对象的属性赋值与全局变量的赋值，是同一件事。（对于Node.js来说，这一条支队REPL环境适用，模块环境之中，全局变量必须显示生命global对象的属性。）</p>
      <p>这种规定被视为JavaScript语言的一大问题，因为很容易不知不觉就创建了全局变量。ES6为了改变这一点，一方面规定，var命令和function命令声明的全局变量依旧是全局对象的属性；另一方面，let命令，const命令和class命令声明的全局变量不属于全局对象的属性。</p>
      <p>
        var a = 1;<br>
        // 如果在Node.js的REPL环境，可以写成global.a <br>
        // 活着才用通用方法，写成this.a <br>
        window.a // 1
      </p>
      <p>
        let b = 1; <br>
        window.b // undefined
      </p>
      <p>上面的代码中，全局变量a由var命令声明，所以是全局对象的属性；全局变量b由let命令声明，所以不是全局对象的属性，返回undefined。</p>
      <h2>2.5 全局对象的属性</h2>
      <p>全局对象是最顶层的对象，在浏览器环境指的是window对象，在Node.js中指的是global对象。在ES5中，全局对象的属性与全局变量是等价的。</p>
      <p>window.a = 1 <br> a // 1</p>
      <p>a = 2; <br> window.a // 2</p>
      <p>上面的代码中，全局对象的属性赋值与全局变量的赋值，是同一件事。（对于Node.js来说，这一条支队REPL环境适用，模块环境之中，全局变量必须显示生命global对象的属性。）</p>
      <p>这种规定被视为JavaScript语言的一大问题，因为很容易不知不觉就创建了全局变量。ES6为了改变这一点，一方面规定，var命令和function命令声明的全局变量依旧是全局对象的属性；另一方面，let命令，const命令和class命令声明的全局变量不属于全局对象的属性。</p>
      <p>
        var a = 1;<br>
        // 如果在Node.js的REPL环境，可以写成global.a <br>
        // 活着才用通用方法，写成this.a <br>
        window.a // 1
      </p>
      <p>
        let b = 1; <br>
        window.b // undefined
      </p>
      <p>上面的代码中，全局变量a由var命令声明，所以是全局对象的属性；全局变量b由let命令声明，所以不是全局对象的属性，返回undefined。</p>
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
  }
}
</script>
