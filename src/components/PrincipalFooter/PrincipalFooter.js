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
                    <img src={home} alt="home" onClick={this.props.onChangeViewHome} />
                    <img src={map} alt="map" onClick={this.props.onSethideViewMap} />
                    <img src={profile} alt="profile" onClick={this.props.onSetProfile} />
                    <img src={notifications} alt="notifications" onClick={this.props.onSetNotifications}/>
                </nav>
        )
    }
}

export default PrincipalFooter;