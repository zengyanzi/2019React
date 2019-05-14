import React,{Component} from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
export default class MessageBox extends Component{
    constructor(){
        super();
        this.state={
            message:[{username:'Jenny',content:'Hello World',createAt:new Date()}]
        };
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
                                <MessageList messages={this.state.message} />
                            </div>
                            <div className="panel-footer">
                               <MessageForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}