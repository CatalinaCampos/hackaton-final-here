import React, {Component} from 'react';
import '../Profile.css';
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
                <img className="profilePicture" src={profilePicture} alt="profilePicture"/>
                <h4 className="profileName">Juana Carreño</h4>
                <div className="activityContainer">
                <div className="row">
                <button className="activity">Artes Mediales</button>
                <button className="activity">Artes Visuales</button>
                <button className="activity">Diseño</button>
                </div>
                <div className="row">
                <button className="activity">Gastronomía</button>
                <button className="activity">Museo</button>
                <button className="activity">Música</button>
                
                </div>
                </div>
                
                
                </div>
        );
    }
}

export default Profile;