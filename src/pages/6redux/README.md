# redux理解

## 1 基本概念

- store 可以理解为加工机器的总工厂
  - state 是数据中心的数据集合
  - reducer 是一个纯函数，根据 type 执行对应的 “动作” 执行对应的更新，返回新的 state
  - state + reducer = store

## 2 升级 react-redux

### react-redux 把 store 和 react 组件 🔗 起来

    1.使用 Provider 将数据传下去（context）  
    2.使用 connect 包裹函数（高阶函数）  
    connect 主要的任务： 1.将 store 的数据作为 props 传给子组件  
    2.注册 store 变化事件，在数据变化了更新数据

[参考 url](https://juejin.cn/post/6844903815594901512)

## redux 更新中的副作用如何处理（异步请求）(中间件)

    1.在调用dispatch之前，先执行其他操作(是一种方案，和saga，dva不一样，但是简单)
    2.redux-thunk,saga,dva

## 为什么要有 react 中间件

    为了可以在执行dispatch之前执行一些异步操作

## redux-saga(感觉这个现在用的很少,不用复习了)

    1.业界比较好的方案
    2.无论怎么说，就是可以异步执行中间件，没什么太多东西

## dva

## useReducer + useContext

    1.使用useReducer + useContext可以实现redux的功能
