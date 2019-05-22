import React, { Component } from 'react';
import '../Home/Home.css'
import './TelephoneNav.css'
import GS from '../../images/GS.png';
import hora from '../../images/hora.png';
import porcentaje from '../../images/porcentaje.png';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faWifi, faSignal, faBatteryThreeQuarters } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faWifi, faSignal, faBatteryThreeQuarters)

class TelephoneNav extends Component {

    render() {
        return (
            <nav className="telephoneNav">
                < FontAwesomeIcon icon="signal" />
                <img src={GS} alt="gs" className="gs" />
                < FontAwesomeIcon icon="wifi" />
                <img src={hora} alt="hora" className="hora" />
                <img src={porcentaje} alt="porcentaje" className="porcentaje" />
                < FontAwesomeIcon icon="battery-three-quarters" />
            </nav>
        )
    }
}

export default TelephoneNav;