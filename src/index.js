import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import divWithClassName from "react-bootstrap/es/utils/divWithClassName";

//组件完整的生命周期
//一些代码编写的顺序
class Counter extends Component{
    constructor(){
        super();
        this.state={num:0};
    }
    //组件将要被挂载
    componentWillMount() {
        console.log('1.componentWillMount')

    }

    handleClick=()=>{
        //setstate是异步的，不能在赋值之后立即获得最新的state值，可以在回调函数中获取最新的状态值
        this.setState({
            num:this.state.num+1
        },()=>{
            console.log(this.state.num)
        });

    }
//更新状态后是否刷新页面
    shouldComponentUpdate(newProps, newState) {
        console.log('4.shouldcomponentupdate组件是否要进行更新')
        if (newState.num%5===0){
            return true;
        } else {
            return false;
        }
    }
    componentWillUnmount() {
        console.log('5.componentwillupdate组件将要更新');
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('6.componentDidupdate组件完成更新')
    }

    render(){
        console.log('2.render组件挂载过程')
        return(
            <div>
                <p>{this.state.num}</p>
                <button onClick={this.handleClick}>+</button>
            </div>
        )
    }
    componentDidMount() {
        console.log('3.组件挂载完成')
    }
}
render(<Counter/>,window.app);