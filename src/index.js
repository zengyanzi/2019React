import React from 'react';
import ReactDOM from 'react-dom';
//import Counter from './component/Counter';
import Todo from './component/Todo';
    //state 是状态树，可以说任意的结构
    //action 是一个纯对象{type:'INCREASE',amount:2}{TYPE:'DECREASE',amount:1}
ReactDOM.render(<Todo/>,document.querySelector("#root"));

