import {createStore} from "./redux";
import $ from 'jquery';
const INCREASE ='INCREASE';
const DECREASE="DECREASE";
$(document.body).append('<p id="counter"></p><button id="increaseBtn">+</button><button id="decreaseBtn">-</button>');

    //state 是状态树，可以说任意的结构
    //action 是一个纯对象{type:'INCREASE',amount:2}{TYPE:'DECREASE',amount:1}
    let reducer=(state={number:0},action)=>{
    if (action===undefined) return state;
        switch (action.type) {
            case INCREASE:
                return{number: state.number+action.amount};
            case DECREASE:
                return{number:state.number-action.amount};
            default:
                return state;

        }
    };
let store=createStore(reducer);
    let render=()=>{
        $('#counter').html(store.getState().number);
    };
    //当store里state发生变化时，会重新执行render方法读取最新的状态
    let unsubscribe=store.subscribe(render);
    setTimeout(function () {unsubscribe();

    },5000)
    $('#increaseBtn').click(()=>store.dispatch({type:INCREASE,amount:3}));
    $('#decreaseBtn').click(()=>store.dispatch({type:DECREASE,amount:3}));
    render();
console.log(store.getState());