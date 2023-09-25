# 香草 VANILLA

为了能快速根据我的需要搭建 Vue 项目，我创建了这个模板项目，可以使用`degit`快速创建项目。

## 核心概念

为什么我说这个模板是渐进式的呢？因为我将按照搭建 Vue 项目的过程，由浅入深逐步创建完整的模板，我会先引入大多数 Vue 开发者会用到的组件，然后引入某些特别的需求才会用到的依赖，每当添加了关键的依赖，我会使用 tag 进行标注。

也就是说，如果你需要所有的工具，那么你可以直接使用`degit`获取最新的工程，然而，如果你只是希望有一个基础的框架，并在随后引入自己需要的依赖，那么你只需要根据自己的需求，获取指定 tag 标注的节点作为模板就可以了。

另外有些功能可能会有多种最佳技术可以选择，我会尽可能的选择我认为最合理的技术栈，但在遇到两难的选择时，我会使用分支来处理。当然，我还是会尽力避免出现分支，因为那样会让事情变得更加复杂。

## 快速开始

在使用`degit`创建项目之前，你需要先确保你安装了`degit`，在已经安装了`node`和`npm`的情况下，执行下面的命令在全局安装`degit`。

```shell
npm install -g degit
```

要使用最新的模板创建项目，只需要执行下面的命令。

```shell
degit mrchar/vanilla
```

如果你需要特定节点的模板，找到指定的 tag 或者 branch，按照下面的方式执行命令。

```shell
degit mrchar/vanilla#dev       # branch
degit mrchar/vanilla#v1.2.3    # release tag
degit mrchar/vanilla#1234abcd  # commit hash
```

先确定你要使用的节点，然后将`#`后面的标记替换为你选择的 branch 或 tag。

## 节点

下面列出的是引入新特征的节点，后面的节点包含前面的节点的所有特征：

| Tag          | Comment                       |
| ------------ | ----------------------------- |
| core         | 纯净的Vite+Vue+Typescript项目 |
| consistent   | 使用工具约束代码样式          |
| tailwindcss  | 使用TailwindCSS开发           |
| axios        | 使用Axios请求网络             |
| vue-router   | 使用VueRouter切换页面         |
| pinia        | 使用Pinia管理状态             |
| element-plus | 使用ElementPlus组件库         |
