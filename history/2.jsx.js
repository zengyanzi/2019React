import React from 'react';
import ReactDOM from 'react-dom';
//申明了一个react元素
let ele =<h1>hello</h1>;
console.log(ele);
//1.标签类型 属性对象 子元素
//1.此处写的属性名都要驼峰语法
//2.有些是JS关键字，所以要换种写法 className， htmlFor
let _ele2  = React.createElement('div',{id:1,className:'red'},['hello']);
//console.log(_ele2);
//let _ele2 = <div><span>hello</span></div>;
//最终的react元素是这样的
let eleObj ={type:'div',props:{
        className: 'red',
        id:1,
        children:['hello',
            {type:'span', props:{className:'blue',children:['word']}}
        ]
    }};
function render(eleObj,container){
    //解构出标签的类型和属性对象
    let {type,props} =eleObj;
    //创建Dom元素
    let ele = document.createElement(eleObj.type);
    //循环属性对象
    for (let attr in props){
        if (attr=='children'){
            props[attr].forEach(function (item) {
                if (typeof item =='string'){
                    let textNode =document.createTextNode(item);
                    ele.appendChild(textNode);
                }else {
                    render(item,ele)
                }

            });
        } else if(attr=='className'){
            ele.setAttribute('class', props[attr]);
        }
        else {
            ele.setAttribute(attr, props[attr]);
        }

    }
    container.appendChild(ele)
}
render(eleObj,document.querySelector('#root'));
//render的含义是把一个react元素渲染到DOM容器内部
//jsx JavaScript +html的混合写法
/*ReactDOM.render(
		<h1>hello</h1>,
		document.querySelector('#root')
	);
/!*{
    tagName:'h1',
        attr:null,
        children:['hello']
}*!/
//react元素是通过js对象来描述DOM结构的一种数据结构
/!*
ReactDOM.render(
	React.createElement('h1',null,['hello'])
);
*!/*/
