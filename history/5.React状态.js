import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
//计时器Clock
// 函数方式声明的组件是静态的，是不能动的
/*
let Clock =()=>{
    return <h1>{new Date().toLocaleDateString()}</h1>
}
setInterval(function(){
    render(<Clock/>,window.app);
},1000)
*/
//通过类来声明组件，类需要继承自component
class Clock extends Component{
    constructor(){
        super();
        //自定义组件状态对象
        //状态只能内部初始化，内部改变
        this.state={
            time:new Date().toLocaleTimeString()
        }
    }
    //生命周期函数
   componentDidMount(){
        window.setInterval(()=>{
            this.setState({time:new Date().toLocaleTimeString()})
        },1000);
    }
    //render里只能返回一个React元素
    render(){
        return  <h1><span>hello</span>{this.state.time}</h1>
    }
}
render(<Clock/>,window.app);