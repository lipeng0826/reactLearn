# 修改这个项目中的log

## node版本： 14.17.0

## 引入less

    安装less和less-loader，less-loader版本为7

    ```shell
    npm install less less-loader@7 --save-dev
    ```
    
    修改config-overrides.js文件，添加less-loader配置

    ```js
    const { override, addLessLoader } = require('customize-cra');

        module.exports = override(
        addLessLoader({
            lessOptions: {
            javascriptEnabled: true,
            },
        }),
        );
    ```

## 失败的尝试：尝试升级npm包

    1.npx npm-check-updates -u
    2.npm install
    npm包升级到最新版本，然后安装，但是一堆问题，感觉升级npm包或者升级node都是个让人痛苦的事情；

## 引入 pinyin-pro包

    增加拼音工具功能

## 增加redux-devtool支持

    1.npm install redux-devtools-extension

```js
import { composeWithDevTools } from '@redux-devtools/extension';
    const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)) // 中间件与 Redux DevTools 一起使用
);
```

如果无法使用，按照浏览器提示到github地址查看使用方法

## 引入highlight

    1.npm install highlight.js
    2.在src/components中增加组件
    3.在使用的地方引用

```js
    <HighLight code="console.log(111)" languages="javascript" />
```
## 升级失败案例

    1.我将包升级到最新版，然后安装依赖
    2.处理了新版react-dom的兼容问题
    3.但是一直提示postcss问题，就是
```js
    const { override, addLessLoader } = require('customize-cra');

module.exports = override(
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
    },
  })
);
```

这块代码有问题，使用chatGpt也不知道为啥，我计划换成vite，这样提高开发效率，而且极大部分功能vite都能实现；

## vite升级

    1.拉个新分支
    2.在新分支上进行修改

