import React from 'react';
import ReactDOM,{render} from 'react-dom';
//组件的两种定义方式，以及他们之间的区别
// 组件定义的第一种方式 函数
// ReactDOM 把React 元素转成真实的DOM元素并且插入到目标容器内部

let Message =(props)=>{
    console.log(props)
    return <h1 style={props.style}>{props.msg}</h1>
}
render(<Message msg="hello" id="5"  style={{color:"red"}} hobby={['a','b']}/>,window.app);