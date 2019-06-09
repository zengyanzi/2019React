import React,{Component} from 'react';
//import {createStore} from '../redux';
import {store} from '../store';
import {ADD_TODO,DELETE_TODO} from "../actions";
//let store=createStore(reducer);
let add_todo =(text)=>({type:ADD_TODO,text});
let delete_todo =(text)=>({type:DELETE_TODO,text});
export default class Todo extends Component{
    constructor(props) {
        super(props);
        this.state={list:store.getState().todo.list};
    }


    handleKeyDown=(event)=>{
        if (event.keyCode === 13 && event.target.value.length>0) {
       /*     let list =this.state.list;
            list.push(event.target.value);
            this.setState({
                list
            });
            event.target.value='';*/
       store.dispatch(
           { type:ADD_TODO,
           text: event.target.value}
          )
            event.target.value='';
        }
    }
    deleteTodo=(index)=>{
        store.dispatch({
            type:DELETE_TODO,
            index
        })
}
componentWillMount() {
        this.unsubscribe=store.subscribe(()=>{
            this.setState({
                list:store.getState().todo.list
            });
        })
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    render(){
        return(
            <div>
                <input type="text" onKeyDown={this.handleKeyDown}/>
                <ul>
                    {
                        this.state.list.map((todo,index)=>(<li>{todo}<button onClick={()=>this.deleteTodo(index)}>-</button></li>))
                    }
                </ul>
            </div>
        )
    }
}

