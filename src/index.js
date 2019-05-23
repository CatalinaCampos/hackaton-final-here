import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
<<<<<<< HEAD
// import App from './App';
// import Home from './components/Home/Home'
import * as serviceWorker from './serviceWorker';
//import Preferences from './components/Preferences/Preferences';
=======
import App from './App';
import Home from './components/Home/Home'
import Map from './components/Map'
import EventInfo3 from './components/EventInfo3/EventInfo3'
import Notifications from './components/Notifications/Notifications'
import * as serviceWorker from './serviceWorker';
import Loading from './components/Loading/Loading'
>>>>>>> d1b9af581f7a833fd55351ecb49cf88723acf017
// import Profile from './components/Profile/Profile';
import ModalM from './components/Modal/Modal';

<<<<<<< HEAD


ReactDOM.render(<ModalM />, document.getElementById('root'));
=======
ReactDOM.render(<App />, document.getElementById('root'));
>>>>>>> d1b9af581f7a833fd55351ecb49cf88723acf017

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

