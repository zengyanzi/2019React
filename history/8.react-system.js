import React from 'react';
import ReactDOM from 'react-dom';
import Counter3 from './component/Counter3';
import  {Provider} from 'react-redux';
import store from './store2';

ReactDOM.render(<Provider store={store}>
    <Counter3/>
</Provider>,document.querySelector("#root"));
