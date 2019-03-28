import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
import PropTypes from 'prop-types';
//受控组件一般指输入组件，input，表单组件
//非受控组件
class Input extends React.Component{
    constructor(){
        super();
        this.state={val:''}
    }
    handleChange=(event)=>{
       let val= event.target.value;
       this.setState({val})
    }
        render() {
        return(
            <div>
                <p>{this.state.val}</p>
                <input onChange={this.handleChange} type ="text"  value={this.state.val}/>
            </div>
        )
    }
}
render(<Input/>,window.app);