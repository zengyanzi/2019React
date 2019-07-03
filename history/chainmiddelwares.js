import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from './redux';
let counter =(state=0,action)=>{
    if (action) {
        switch (action.type) {
            case "ADD":
                return  state+1;
            case "SUB":
                    return state-1;
            default:
                return state;

        }
    }else{
        return state;
    }
}
/*let logger =store =>next =>action =>{
     console.log('before ',store.getState());
    console.log(action);
     next(action);
    console.log('after ',store.getState());
}*/

let logger1 = store =>next =>action=>{
    console.log('logger1 before',store.getState());
    next(action);
    console.log('logger1 after',store.getState());
}

let logger2= store =>next =>action=>{
    console.log('logger2 before',store.getState());
    next(action);
    console.log('logger2 after',store.getState());
}
/*let promise =store=>next=>action=>{
    if (isPromise(action)){
       return action.then((data)=>next(data));
    }
    next(action);
}
let isPromise= obj=>obj.then;*/
/*let thunk = store=>next=>action=>{
    if (typeof  action=='function')
        return action(next);
    return next(action);
}*/
//多个中间件，从左到右依次执行
let store=applyMiddleware(logger1,logger2)(createStore)(counter);
console.log(store.getState())
store.subscribe(function (){
    console.log(store.getState());
} )
// store.dispatch({type:'ADD'});
// store.dispatch({type:'SUB'});
/*store.dispatch(function (dispatch) {
    setTimeout(function () {
        dispatch({type:'ADD'});

    },3000)

});*/
/*
store.dispatch(new Promise(function(resolve,reject){
    setTimeout(function (){
        resolve({type:'ADD'});
    },3000 );
}));
*/
store.dispatch({type:'ADD'});

//ReactDOM.render(,document.querySelector("#root"));
