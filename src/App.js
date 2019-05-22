import React, { Component } from 'react';
import './App.css';
import SearchDirection from './components/Search'
import Map from './components/Map';
import home from './images/home.png';
import map from './images/map.png';
import profile from './images/profile.png';
import notifications from './images/notifications.png';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faWifi, faSignal, faBatteryThreeQuarters } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faWifi, faSignal, faBatteryThreeQuarters )

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'normal.day',
            latitude: false,
            longitude: false,
            error: null,
        }

        this.onChange = this.onChange.bind(this);

    }

    onChange(evt) {
        evt.preventDefault();
        let change = evt.target.id;
        this.setState({
            ...this.state,
            "theme": change,
        });
    }

    render() {
        return (
            <div className="App">
                <nav className="telephoneNav">
                < FontAwesomeIcon icon="signal" />
                
                < FontAwesomeIcon icon="wifi" />


                < FontAwesomeIcon icon="battery-three-quarters" />
                </nav>
                
                <Map
                    app_id={this.state.app_id}
                    app_code={this.state.app_code}
                    lat="-33.4489"
                    lng="-70.6693"
                    zoom="13"
                    startPoint={this.state.startPoint}
                    endPoint={this.state.endPoint}
                />
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

export default App;