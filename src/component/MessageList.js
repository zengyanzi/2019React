import React,{Component} from 'react';
export default class MessageList extends Component{
    render(){
        return(
            <ul className="list-group">
                {this.props.messages.map((message,index)=>(
                        <li key={index} className="list-group-item">{message.username}:{message.content}<span className="pull-right">{message.createAt.toLocaleDateString()}</span></li>
                    )
                )}
            </ul>
        )
    }
}