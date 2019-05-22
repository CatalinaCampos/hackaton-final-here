// import React from 'react';
import React, { Component } from 'react';
import './App.css';
import Map from './components/Map';
import home from './images/home.png';
import map from './images/map.png';
import profile from './images/profile.png';
import notifications from './images/notifications.png';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faStroopwafel, faHome, faMap} from '@fortawesome/free-solid-svg-icons'

library.add(fab, faStroopwafel, faHome, faMap)

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
            <nav className="telephoneNav"></nav>
                <Map
                    app_id="68jKP099OUN8oLgbd5Jq"
                    app_code="Rb8T_A8l4p9bEPt2eawMCA"
                    zoom="12"
                    theme={this.state.theme}
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
