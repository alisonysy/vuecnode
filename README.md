# Vue-CLI实现CNode社区

本项目利用CNode社区提供的API，使用Vue-CLI手脚架、Vue组件、Vue-router搭建仿CNode社区项目，并重新布局。
项目地址：[vuecnode](https://alisonysy.github.io/vuecnode/)

## 项目技术栈
+ **Vue-CLI 3**:对比Vue-CLI 2.x，3.x集成度更高，在创建项目时提供常用插件。
+ **Vue-router**:进行路径管理，利用hash模式模拟完整URL。
+ **Axios**:基于Promise，用于浏览器和Node.js的HTTP客户端，改写Vue原型链，并把Axios挂载其上。
+ **其他**: JavaScript ES6, Vue.js transition和CSS 3结合, webpack打包配置等等。

使用Vue-CLI 3项目目录比2.x时期精简，去掉了`build`和`config`等目录，把对输出路径、预处理、webpack等的配置集成到`vue.config.js`（有些项目创建时没有自带`vue.config.js`文件，可后期手动添加到根目录）。

## 项目架构
以下只列出最终页面及其相关组件部分：
```
|——index.html //Vue-CLI构建的最终SPA页面
|     |
|——App.vue //这是整个Vue项目的主组件，作为页面入口，其他组件都挂载到此组件中
|     |——navigation.vue //顶部目录栏组件
|     |——pagination.vue //此处把分页器提上，方便用户快速跳转页面
|     |——postList.vue //main views部分分为首页的文章列表、不同分类的文章列表
|     |——article.vue //点击文章题目能进入文章详情页
|           |__replies.vue //文章底部包含回复组件，把回复作为卡片形式展示，用户可点击查看详细回复
|     |__userInfo.vue //用户详情页，包括用户基本资料、创建的话题和回复的话题
```

## 项目截图
![Vue实现CNode社区-首页截图](https://i.loli.net/2019/03/27/5c9aedc8b36a8.png "Vue实现CNode社区-首页截图")

## To-do
+ 实现文章内悬浮“回到顶部”按钮
