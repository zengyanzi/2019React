import React,{Component} from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
export default class MessageBox extends Component{
    constructor(){
        super();
        this.state={
            messages:[{username:'Jenny',content:'Hello World',createAt:new Date()}]
        };
    }
    addMessage=(message)=>{
        let messages =[...this.state.messages,message]
        this.setState({
            messages
        })
    }
    removeMessage=(index)=>{
        this.state.messages.splice(index,1)
        this.setState({messages:[...this.state.messages]})
    }
    render(){

        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h2>Welcome to Message </h2>
                            </div>
                            <div className="panel-body">
                                <MessageList  messages={this.state.messages} removeMessage={this.removeMessage} />
                            </div>
                            <div className="panel-footer">
                               <MessageForm addMessage={this.addMessage}  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}