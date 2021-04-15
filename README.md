# react 源码

### react-build

通过以下步骤可生成项目中的 react-build 文件夹

-   lone 源码：git clone https://github.com/facebook/react.git

-   依赖安装：npm install or yarn

-   build 源码：npm run build react,react-dom,scheduler --type=NODE

### demo

通过一下步骤可生成项目中的 demo 文件夹

```
npx create-react-app demo
npm i
```

### 为源码建立软链：

创建 react-build 的软链

```
cd react-build/node_modules/react
npm link
cd react-build/node_modules/react-dom
npm link
```

### 在 demo 在链接

```
cd demo
npm link react react-dom
```
