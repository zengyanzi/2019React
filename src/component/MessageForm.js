import React,{Component} from 'react';
export default class MessageForm extends Component{
    handleSubmit=(event)=>{
        event.preventDefault()
        let username=this.username.value;
        let content =this.content.value;
        this.props.addMessage({username,content,createAt:new Date()})
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username" className="control-label">username</label>
                    <input ref={xx=>this.username=xx} type="text" className="form-control"/>
                </div>
                <div className="form-group"><label htmlFor="content" className="control-group">
                    Content </label><input ref={x=>this.content=x} type="text" className="form-control"/>
               </div>
                <div className="form-group">
                    <button className="btn btn-primary">Publish</button>
                </div>
            </form>
            )
    }
}