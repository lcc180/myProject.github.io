<template>
  <div class="article-detail">
    <p>
      JavaScript对于字符串（string）的操作十分友好，无论是宽字节字符串还是单字节字符串，都被默认是一个字符串。示例代码如下所示
    </p>
    <pre>
      <code>
        console.log("0123456789".length); //10
        console.log("零一二三四五六七八九".length); //10
      </code>
    </pre>
    <hr>
    <h2>6.1.2 Buffer对象</h2>
    <p>Buffer对象类似于数组，它的元素为16进制的两位数，即0到255的数值。示例代码如下所示</p>
    <pre>
      <code>
        var str = "深入浅出node.js";
        var buf = new Buffer(str, 'utf-8');
        console.log(buf);
        // =&gt; &lt;Buffer e6 b7 b1 e5 85 a5 e6 b5 85 e5 87 ba e6 6f 64 65 2e 6a 73
      </code>
    </pre>
    <p>由上面的示例可见，不同编码的字符串占用的元素个数各不相同，上面代码中的中文字在UTF-8编码下占用3个元素</p>
    <h2>Buffer内存分配</h2>
    <hr>
    <h2>6.5 总结</h2>
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
