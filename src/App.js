import React, { Component } from 'react';
import './App.css';

// import Profile from '../src/components/Profile/Profile';

import Map from './components/Map';
import PrincipalFooter from './components/PrincipalFooter/PrincipalFooter'
import TelephoneNav from './components/TelephoneNav/TelephoneNav'
import Notification from './components/Notification'
import Home from './components/Home/Home'
import EventInfo from './components/EventInfo/EventInfo'


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            app_id: "68jKP099OUN8oLgbd5Jq",
            app_code: "Rb8T_A8l4p9bEPt2eawMCA",
            startPoint: {
                lat: '',
                long: '',
            },
            endPoint: {
                lat: '',
                long: '',
            },
            updateNotifications: false,
            hideViewMap: false,
            viewHome: true,
            viewInfoEvent: false
        }

        this.functionCoordUser = this.functionCoordUser.bind(this);
        this.changeNotifications = this.changeNotifications.bind(this);
        this.changehideViewMap= this.changehideViewMap.bind(this);
        this.changeViewHome= this.changeViewHome.bind(this);
        this.changeViewEvent= this.changeViewEvent.bind(this)

    }

    componentDidMount() {
        this.setState({
            ...this.state,
            hideViewMap: false,
            updateNotifications: false,
        })
        if (navigator.geolocation) {
            console.log(navigator.geolocation)
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    this.setState({
                        ...this.state,
                        lat: position.coords.latitude,
                        long: position.coords.longitude,
                        error: null,
                    });
                },
                (error) => {
                    // alert(error.message)
                    this.setState({
                        ...this.state,
                        error: error.message
                    })
                }
            );
        }
    }

    async functionCoordUser(start, end) {
        this.startPoint = await fetch("https://geocoder.api.here.com/6.2/geocode.json?app_id=" + this.state.app_id + "&app_code=" + this.state.app_code + "&searchtext=" + start)
            .then(data => data.json())
            .then(data => {
                return {
                    lat: data.Response.View[0].Result[0].Location.NavigationPosition[0].Latitude,
                    long: data.Response.View[0].Result[0].Location.NavigationPosition[0].Longitude,
                    address: data.Response.View[0].Result[0].Location.Address.Label,
                }
            })
        this.endPoint = await fetch("https://geocoder.api.here.com/6.2/geocode.json?app_id=" + this.state.app_id + "&app_code=" + this.state.app_code + "&searchtext=" + end)
            .then(data => data.json())
            .then(data => {
                return {
                    lat: data.Response.View[0].Result[0].Location.NavigationPosition[0].Latitude,
                    long: data.Response.View[0].Result[0].Location.NavigationPosition[0].Longitude,
                    address: data.Response.View[0].Result[0].Location.Address.Label,
                }
            })

        this.setState({
            ...this.state,
            startPoint: {
                ...this.startPoint
            },
            endPoint: {
                ...this.endPoint
            },
        })
    }

    changeNotifications(){
        this.setState({
            ...this.state,
            updateNotifications: true,
            hideViewMap: false,
            viewHome: false,
            viewInfoEvent: false,
        })
    }

    changehideViewMap() {
        this.setState({
            ...this.state,
            hideViewMap: true,
            updateNotifications: false,
            viewHome: false,
            viewInfoEvent: false,
        })
    }

    changeViewEvent(){
        this.setState({
            ...this.state,
            viewInfoEvent: true,
            viewHome: false,
            hideViewMap: false,
            updateNotifications: false,
        })
    }

    changeViewHome(){
        this.setState({
            ...this.state,
            viewHome: true,
            viewInfoEvent: false,
            hideViewMap: false,
            updateNotifications: false,
            
        })
    }


    render() {
        return (
            <div className="App">
                    <TelephoneNav />
                    
                {this.state.hideViewMap && <Map   
                        app_id={this.state.app_id}
                        app_code={this.state.app_code}
                        lat="-33.4489"
                        lng="-70.6693"
                        zoom="13"
                        startPoint={this.state.startPoint}
                        endPoint={this.state.endPoint}
                        />}
                    {this.state.updateNotifications && <Notification/>}
                    {this.state.viewHome && <Home onChangeViewEvent={this.changeViewEvent}/>}
                    
                    <PrincipalFooter onSetNotifications={this.changeNotifications}
                    onSethideViewMap={this.changehideViewMap} onChangeViewHome={this.changeViewHome}/>
                    
                    {this.state.viewInfoEvent && <EventInfo onChangeViewHome={this.changeViewHome} />}
                    
                </div>
        )
    }
}
export default App;