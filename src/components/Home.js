import React, { Component } from 'react';
import './Home.css'
import GS from '../images/GS.png';
import hora from '../images/hora.png';
import porcentaje from '../images/porcentaje.png';
import home from '../images/home.png';
import map from '../images/map.png';
import profile from '../images/profile.png';
import notifications from '../images/notifications.png';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faWifi, faSignal, faBatteryThreeQuarters } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faWifi, faSignal, faBatteryThreeQuarters)

class Home extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="App">
                <nav className="telephoneNav">
                    < FontAwesomeIcon icon="signal" />
                    <img src={GS} alt="gs" className="gs" />
                    < FontAwesomeIcon icon="wifi" />
                    <img src={hora} alt="hora" className="hora" />
                    <img src={porcentaje} alt="porcentaje" className="porcentaje" />
                    < FontAwesomeIcon icon="battery-three-quarters" />
                </nav>

                <div className="divEvents"> 
                    <nav>PRÓXIMOS EVENTOS</nav>
                    <div>

                    </div>
                </div>

                <nav className="principalNav">
                    <img src={home} alt="home" />
                    <img src={map} alt="map" />
                    <img src={profile} alt="profile" />
                    <img src={notifications} alt="notifications" />
                </nav>

            </div>
        )
    }
}

export default Home;