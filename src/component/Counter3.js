import React,{Component} from 'react';
import {INCREASE,DECREASE} from "../actions";
import {connect} from 'react-redux';

class Counter3 extends Component{
    constructor(){
        super();
        this.state={}
    }

    render(){
        return(
            <div>
                <p>{this.props.value}</p>
                <button onClick={this.props.onIncrease}>+</button>
                <button onClick={this.props.onDecrease}>-</button>
            </div>
        )
    }
}
//把store里的状态对象映射成属性 mapstatetoprops

let mapStateToProps=(state)=>(
    {
        value:state.number
    }
)
//把dispatch方法映射成UI组件的属性
let mapDispatchToProps=(dispatch)=>(
    {
        onIncrease:()=>dispatch({type:INCREASE}),
        onDecrease:()=>dispatch({type:DECREASE})
    }
)


export default  connect(mapStateToProps,mapDispatchToProps)(Counter3);