import {ADD_TODO,DELETE_TODO} from "../actions";
let reducer=(state={list:[]},action)=>{
    if (action===undefined) return state;
    switch (action.type) {
        case ADD_TODO:
            return{list:[...state.list,action.text]};
        case DELETE_TODO:
            let list = state.list;
            list.splice(action.index,1);
            return{list:[...list]};//state 具有不变性，每次都要返回新的对象
        default:
            return state;
    }
};
export default reducer;