import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
import PropTypes from 'prop-types';

//非受控组件 value 不受state控制
class Sum extends React.Component{
    handleChnage=(event)=>{
        let a = parseInt(this.a.value);
        let b  =parseInt(this.b.value);
        this.result.value=a+b;
    }
        render() {
        return(
            //ref等于一个函数，当元素被挂载到页面中回立刻调用此函数，并传入渲染后的DOM元素 这里的this代表当前组件实例整个Sum组件
            <div onChange={this.handleChnage}>
               <input ref={ref=>this.a=ref} type="text"/>+
                <input ref={ref=>this.b=ref} type="text"  />=
                <input ref={ref=>this.result=ref} type="text" />
            </div>
        )
    }
}
render(<Sum/>,window.app);