import React, { Component } from 'react';
import './PrincipalFooter.css'

import home from '../../images/home.png';
import map from '../../images/map.png';
import profile from '../../images/profile.png';
import notifications from '../../images/notifications.png';

class PrincipalFooter extends Component {

    render(){
        return(
            <nav className="principalNav">
                    <img src={home} alt="home" />
                    <img src={map} alt="map" />
                    <img src={profile} alt="profile" />
                    <img src={notifications} alt="notifications" />
                </nav>
        )
    }
}

export default PrincipalFooter;