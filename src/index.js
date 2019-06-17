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

let thunk = store=>next=>action=>{
    if (typeof  action=='function')
        return action(next);
    return next(action);
}
let store=applyMiddleware(thunk)(createStore)(counter);
console.log(store.getState())
store.subscribe(function (){
    console.log(store.getState());
} )
// store.dispatch({type:'ADD'});
// store.dispatch({type:'SUB'});
store.dispatch(function (dispatch) {
    setTimeout(function () {
        dispatch({type:'ADD'});

    },3000)

});


//ReactDOM.render(,document.querySelector("#root"));
