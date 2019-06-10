import {DECREASE,INCREASE} from "../actions";
let reducer=(state={number:0},action)=>{
    if (action===undefined) return state;
    switch (action.type) {
        case INCREASE:
            return{number: state.number+(action.amount||1)};
        case DECREASE:
            return{number:state.number-(action.amount||1)};
        default:
            return state;
    }
};
export default reducer;