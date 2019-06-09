import {createStore} from "./redux";
import counter from'./reducers/counter';
import todo from './reducers/todo';
import combineReducers from './combineReducers';
//{counter:{number:0},todo:{list:[]}}

let reducer =combineReducers({
    todo,
    counter
})
let store=createStore(reducer);
export {store};