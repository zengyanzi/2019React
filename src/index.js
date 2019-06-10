import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "./redux";
import Counter2 from './component/Counter2';
import counter from './reducers/counter';
import  Provider from './component/Provider';
let store=createStore(counter);

ReactDOM.render(<Provider store={store}>
    <Counter2/>
</Provider>,document.querySelector("#root"));
