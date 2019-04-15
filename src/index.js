import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Card,ButtonToolbar,Button  } from 'react-bootstrap';
//单向数据流
class Panel extends React.Component{
    constructor(){
        super();
        this.state={color:'black'}
    }
    render() {
        return(
            <div>
                <ButtonToolbar>
                    <Button variant="primary" onClick={()=>{this.setState({color:"green"})}}>Green</Button>
                    <Button variant="secondary">Red</Button>
                </ButtonToolbar>
                <Card >
                    <PanelHead head={this.props.head} color={this.state.color}/>
                    <PanelBody body={this.props.body}/>
                    <PanelFooter foot={this.props.foot}/>
                </Card>
            </div>

        )
    }
}
class PanelHead extends  React.Component{
    render() {
        return(
            <Card.Body style={{color:this.props.color}}>{this.props.head}</Card.Body>
        )
    }
}
class PanelBody extends  React.Component{
    render() {
        return(
            <Card.Body>{this.props.body}</Card.Body>
        )
    }
}
class PanelFooter extends  React.Component{
    render() {
        return(
            <Card.Body>{this.props.foot}</Card.Body>
        )
    }
}

render(<Panel head="head"body="body"foot="foot"/>,window.app);