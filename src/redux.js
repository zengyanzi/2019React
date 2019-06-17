const createStore =(reducer)=>{
    let state;
    let listeners =[];
    //用来获取最新的状态
    let getState =()=>state;
    let dispatch =(action)=>{
        state=reducer(state,action);
        listeners.forEach(listener=>listener())
    }
    //订阅方法执行后会返回一个取消订阅的函数，调用可以取消订阅
    let subscribe=(listener)=>{
        listeners.push(listener);
        return()=>{
          listeners.filter(l=>listener!==l
          );
        }
    }
    dispatch();
    return {
        getState,//获取最新的状态对象
        subscribe,//订阅状态变化事件
        dispatch
    }

}
//应用中间件 对dispatch的加强
let applyMiddleware =middleware=> createStore=>reducer=>{
        let store =createStore(reducer);
        middleware=middleware(store);
        let dispatch = middleware(store.dispatch)
        return{
            ...store,dispatch
        }

    }

export {createStore,applyMiddleware
}