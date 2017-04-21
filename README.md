# my-project

### 特别提醒
请将代码提交到develop分支
master分支用于生产环境，请勿直接提交到master分支

### 环境配置：
安装[nodejs](https://nodejs.org/download/)(版本为v4.2.2)
安装gulp
```
npm install -g gulp@3.9.1
```

### 安装项目依赖
```
$ cd pandora-web
$ npm install -g cnpm
$ cnpm install
```

### 启动项目
```
$ gulp s
```

### 切换API并启动项目
```
// 测试环境
$ gulp s --env=test
// 生产环境
$ gulp s --env=production
// 开发环境
$ gulp s --env=dev
或
$ gulp s
```

### 生成可部署的代码
```
// 生成可部署的版本（生产环境）
$ gulp build --env=production
// 生成可部署的版本（测试环境）
$ gulp build --env=test
```

### 开发指引
Feel free to use:
<br>
[Bootstrap components](http://getbootstrap.com/components/)
<br>
[Bootstrap UI](http://getbootstrap.com/css/)
<br>
[Angular UI](http://angular-ui.github.io/bootstrap/)
