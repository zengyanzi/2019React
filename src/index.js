import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import App from './component/App';
/*
function Root(){
    return<h1> Root </h1>
}
function Home(){
    return<h1> Home </h1>
}
function User(){
    return<h1> User </h1>
}
function Profile(){
    return<h1> Profile </h1>
}
*/

ReactDom.render( App,document.querySelector('#root')
)