import React from 'react';
import ReactDOM from 'react-dom';
import {PropTypes} from'prop-types';
//import MessageList from "./component/MessageList";
// import Counter from './component/Counter';
// import Todo from './component/Todo';
    //state 是状态树，可以说任意的结构
    //action 是一个纯对象{type:'INCREASE',amount:2}{TYPE:'DECREASE',amount:1}
class Container extends React.Component{
    getChildContext(){
        return{
            color:'red'
        }
    }
    render() {
        return(
            <MessageList messages={this.props.messages}/>
            )

    }
}
Container.childContextTypes={
    color:PropTypes.string
}
class MessageList extends React.Component{
    render() {
        return(
            <ul>
                {
                    this.props.messages.map((message,index)=><Message message={message}/>)
                }
            </ul>
        )
    }
}
class Message extends React.Component{
    render() {
        return (
            <li style={{color:this.context.color}}> {this.props.message}  </li>
        )

    }
}
Message.contextTypes={
    color:PropTypes.string
}
let messages =[1,3,5];
let color='blue';
ReactDOM.render(<Container messages={messages}>
</Container>,document.querySelector("#root"));

