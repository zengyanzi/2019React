import React from 'react';
import ReactDOM from 'react-dom';
//  1.React是一个用户界面的库
// 2.React 元素 JSX元素 其实就是用js来描述界面对象
// 首字母要小写，凡是首字母小写的都会被认为是React 元素
//可以直观的将一个复杂的页面分割成若干个独立组件
// <div><span>hello</span></div>

/*ReactDOM.render(
    React.createElement('div', null, [React.createElement('span', null, ['hello'])]), document.querySelector('#root')
);*/
ReactDOM.render(
    <div><span className="red" style={{ backgroundColor:'green' }}></span>hello</div>,document.querySelector('#root')
);