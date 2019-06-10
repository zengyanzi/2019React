import React from "react";
import {PropTypes} from 'prop-types';
let connect=(mapStateToProps,mapDispatchToProps)=>(_component)=>{
    class Proxy extends React.Component{
        constructor(){
            super();
            this.state= {};
        }
        componentWillMount(){
            this.context.store.subscribe(()=>{
                this.unsubscribe=this.setState(mapStateToProps(this.context.store.getState()));
            })
        }
        componentWillUnmount(){
            this.unsubscibe();
        }
        render(){
            return <_component {...this.state}
                               {...mapDispatchToProps(this.context.store.dispatch)}/>
        }
    }
    Proxy.contextTypes={
        store:PropTypes.object
    }
    return Proxy;

}
export default connect;