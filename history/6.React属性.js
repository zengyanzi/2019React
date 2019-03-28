import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
import PropTypes from 'prop-types';
class Person extends Component{
    constructor(){
        super();
        this.state={happy:true};
    }
    //default props
    static defaultProps ={
        name:'unknown'
    }
    //如果定义组件的时候希望传入组件的props有类型和是否必填的限制
    static propTypes ={
        name:PropTypes.string,
        age:PropTypes.number.isRequired
    }
    handleClick=()=>{
        this.setState({
            happy:!this.state.happy
        })
    }
    render(){
        let heart =this.state.happy?'Happy':'Sad';
        return(
            <div>
                <p>Name:{this.props.name}</p>
                <p>Age is :{this.props.age}</p>
                <p>Mood:{heart}</p>
                <button onClick={this.handleClick}>Change</button>
            </div>
        )
    }
}
render(<Person name='Jenny' age={99} />,window.app);