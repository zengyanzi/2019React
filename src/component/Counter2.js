import React,{Component} from 'react';
import {createStore} from "../redux";
import counter from '../reducers/counter';
import {INCREASE,DECREASE} from "../actions";
import connect from '../connect';
let store =createStore(counter);

class Counter2 extends Component{
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


export default  connect(mapStateToProps,mapDispatchToProps)(Counter2);