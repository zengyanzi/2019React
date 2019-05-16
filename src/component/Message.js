import React,{Component} from 'react';
export default class Message extends Component{
    render(){
        let {message,index}=this.props;
        return(
            <li key={index} className="list-group-item">
                {message.username}:{message.content}
                <button className="btn btn-danger btn-sm"  onClick={this.props.removeMessage}>Delete</button>
                <span className="pull-right">{message.createAt.toLocaleDateString()}</span>
            </li>
        )
    }
}