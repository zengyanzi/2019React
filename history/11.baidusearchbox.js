import React,{Component} from 'react';
import jsonp from 'jsonp';

export default class Suggest extends Component{
    constructor(){
        super();
        this.state={
            words:[],
            index:-1//当前选中的索引
        };
    }
    handleChange=(event)=>{
        let wd=event.target.value;
        this.wd= wd;

        jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+wd,{
        param:'cb'
        },(err,data)=>{
        console.log(data);
        this.setState({words:data.s})
        });
    }

    handleKeyDown=(event)=>{
        let code =event.keyCode;
        if (code == 38 || code == 40){
            let index = this.state.index;
            if (code == 38){
                index--;
                if (index==-1){
                    index=this.state.words.length-1;
                }
            } else if(code ==40){
                index ++;
                if (index == this.state.words.length){
                    index=-1;
                }
            }
            this.setState({
                index
            })
        }     if (event.keyCode==13) {
            window.location.href ='http://www.baidu.com/s?wd='+event.target.value
        }
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <input value={this.state.index==-1?this.wd:this.state.words[this.state.index]} onKeyDown={this.handleKeyDown} type="text" className="form-control" onChange={this.handleChange}/>
                            </div>
                            <div className="panel-body">
                                <ul className="list-group">
                                    {
                                        this.state.words.map((word,index)=>(
                                            <li key={index} className={"list-group-item "+(index==this.state.index?'active':'')}>{word}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}