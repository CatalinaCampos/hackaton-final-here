// import React from 'react';
import React, { Component } from 'react';
import './App.css';
import ThemeSelector from './components/ThemeSelector';
import Map from './components/Map';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'normal.day',
            latitude: false,
            longitude: false,
            error: null
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
                <Map
                    app_id="68jKP099OUN8oLgbd5Jq"
                    app_code="Rb8T_A8l4p9bEPt2eawMCA"
                    zoom="12"
                    theme={this.state.theme}
                />
                <ThemeSelector changeTheme={this.onChange} />
            </div>
        );
    }
}

export default App;
