import React from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.css';
import 'materialize-css/dist/css/materialize.css';
import {Provider} from 'react-redux'
import {createStore , compose} from 'redux';
import { applyMiddleware} from "redux";
import RootReducer from './store/reducers/RootReducer'
import thunk from 'redux-thunk'
import {  getFirestore , reduxFirestore  } from 'redux-firestore';
import {  getFirebase , reactReduxFirebase } from 'react-redux-firebase';
// import FirebaseConfigs from './configs/FirebaseConfigs'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(RootReducer ,
    compose(
     applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore}))
    //  ,
    //  reduxFirestore(FirebaseConfigs),
    //  reactReduxFirebase(FirebaseConfigs)

     )
);
ReactDOM.render( <Provider store={store}> <App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
