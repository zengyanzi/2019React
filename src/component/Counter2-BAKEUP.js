import React,{Component} from 'react';
import {createStore} from "../redux";
import counter from '../reducers/counter';

let store=createStore(counter);

export default class Counter2 extends Component{
    constructor(props) {
        super(props);
        ///从store的state到当前组件state的映射
        this.state={
            value:store.getState().number
        };
    }
    componentWillMount() {
       this.unsubscribe= store.subscribe(()=>{
            this.setState({
                value:store.getState().number
            });
        })
    }
    componentWillUnmount() {
        this.unsubscribe();
    }


    render(){
        return(
            <div>
                <p>{this.state.value}</p>
                <button>+</button>
                <button>-</button>
            </div>
        )
    }
}