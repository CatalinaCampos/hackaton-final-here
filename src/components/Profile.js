import React, {Component} from 'react';
import '../Profile.css';
import home from '../images/home.png';
import map from '../images/map.png';
import profile from '../images/profile.png';
import notifications from '../images/notifications.png';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faWifi, faSignal, faBatteryThreeQuarters } from '@fortawesome/free-solid-svg-icons'
import profilePicture from '../images/profilePicture.jpg';
library.add(fab, faWifi, faSignal, faBatteryThreeQuarters)

class Profile extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <nav className="telephoneNav">
                        < FontAwesomeIcon icon="signal" />
                        < FontAwesomeIcon icon="wifi" />
                        < FontAwesomeIcon icon="battery-three-quarters" />
                </nav>

                <img className="profilePicture" src={profilePicture} alt="profilePicture"/>
                <h4 className="profileName">Juana Carreño</h4>
                <button className="artesMediales">Artes Mediales</button>
                
                <nav className="principalNav">
                        <img src={home} alt="home" />
                        <img src={map} alt="map" />
                        <img src={profile} alt="profile" />
                        <img src={notifications} alt="notifications" />
                </nav>
                </div>
        );
    }
}

export default Profile;