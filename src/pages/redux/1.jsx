import React, { Component } from "react";
import { createStore } from "redux";

// reducer函数：根据action的类型改变state
const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREASE":
      return { count: state.count + 1 };
    case "DECREASE":
      return { count: state.count - 1 };
    default:
      return state;
  }
};
// actions 定义指令
const actions = {
  increase: () => ({ type: "INCREASE" }),
  decrease: () => ({ type: "DECREASE" }),
};

// 通过createStore创建store
const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

// 调用store.dispatch()发出修改state的命令
store.dispatch(actions.increase()); // {count: 1}