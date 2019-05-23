import React, { Component } from 'react';
import './Loading.css';

//import logo from '../../images/logo.png'
import TelephoneNav from '../TelephoneNav/TelephoneNav'
import principalpage from '../../images/principalpage.png'

class Loading extends Component {

    render(){
        return(
            <div className="loading">
            <TelephoneNav />
                <img src={principalpage} alt="evento" className="logo" />
                <div className="lds-hourglass"></div>
            </div>
        )
    }
}

export default Loading;