import React,{Component} from 'react';
import './MessageBox.css';
import Message from './Message';
export default class MessageList extends Component{
    render(){
        return(
            <ul className="list-group">
                {this.props.messages.map((message,index)=>(
                    <Message message={message} index={index} removeMessage={this.props.removeMessage}/>
                    )
                )}
            </ul>
        )
    }
}