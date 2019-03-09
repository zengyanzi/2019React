import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <h1>hello world</h1>,
    document.querySelector("#root")

);//React通过JS来描述DOM的一种数据结构
/*{
    tagName:'h1',
        attr:null,
    children:['hello']
}*/
/*ReactDOM.render(
    React.createElement('h1',null,['hello'])
);*/
