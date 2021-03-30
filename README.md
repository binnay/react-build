* lone源码：git clone https://github.com/facebook/react.git

* 依赖安装：npm install or yarn

* build源码：npm build react,react-dom,scheduler --type=NODE

### 为源码建立软链：

```
cd build/node_modules/react
npm link
cd build/node_modules/react-dom
npm link
```

### create-react-app创建项目

```
npx create-react-app demo
npm link react react-dom
```
