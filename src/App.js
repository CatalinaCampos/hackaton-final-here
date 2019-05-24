import React, { Component } from 'react';
import './App.css';
// import Profile from '../src/components/Profile/Profile';

// import Loading from './components/Loading/Loading';
import Map from './components/Map';
import PrincipalFooter from './components/PrincipalFooter/PrincipalFooter'
import TelephoneNav from './components/TelephoneNav/TelephoneNav'
import Notifications from './components/Notifications/Notifications'
import Home from './components/Home/Home'
import EventInfo from './components/EventInfo/EventInfo'
import EventInfo2 from './components/EventInfo2/EventInfo2'
import EventInfo3 from './components/EventInfo3/EventInfo3'


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            app_id: "68jKP099OUN8oLgbd5Jq",
            app_code: "Rb8T_A8l4p9bEPt2eawMCA",
            startPoint: {
                lat: '',
                lng: '',
            },
            endPoint: {
                lat: "",
                lng: "",
            },
            updateNotifications: false,
            hideViewMap: false,
            viewHome: true,
            viewInfoEvent: false,
            viewInfoEvent1: false,
            viewInfoEvent2: false,
        }

        this.functionCoordUser = this.functionCoordUser.bind(this);
        this.changeNotifications = this.changeNotifications.bind(this);
        this.changehideViewMap = this.changehideViewMap.bind(this);
        this.changeViewHome = this.changeViewHome.bind(this);
        this.changeViewHome1 = this.changeViewHome1.bind(this);
        this.changeViewHome2 = this.changeViewHome2.bind(this);
        this.changeViewEvent = this.changeViewEvent.bind(this);
        this.changeViewEvent1 = this.changeViewEvent1.bind(this);
        this.changeViewEvent2 = this.changeViewEvent2.bind(this);
        this.backArrow= this.backArrow.bind(this)

    //     this.changeViewEvent2 = this.changeViewEvent2.bind(this);
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            hideViewMap: false,
            updateNotifications: false
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
        this.startPoint = await fetch("https://cors-anywhere.herokuapp.com/https://geocoder.api.here.com/6.2/geocode.json?app_id=" + this.state.app_id + "&app_code=" + this.state.app_code + "&searchtext=" + start)
            .then(data => data.json())
            .then(data => {
                return {
                    lat: data.Response.View[0].Result[0].Location.NavigationPosition[0].Latitude,
                    long: data.Response.View[0].Result[0].Location.NavigationPosition[0].Longitude,
                    address: data.Response.View[0].Result[0].Location.Address.Label,
                }
            })
        this.endPoint = await fetch("https://cors-anywhere.herokuapp.com/https://geocoder.api.here.com/6.2/geocode.json?app_id=" + this.state.app_id + "&app_code=" + this.state.app_code + "&searchtext=" + end)
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

    changeViewEvent() {
        this.setState({
            ...this.state,
            viewInfoEvent: true,
            viewHome: false,
            // hideViewMap: false,
            updateNotifications: false,
        })
    }

    changeViewEvent1() {
        this.setState({
            ...this.state,
            viewInfoEvent1: true,
            viewHome: false,
            // hideViewMap: false,
            updateNotifications: false,
        })
    }

    changeViewEvent2() {
        this.setState({
            ...this.state,
            viewInfoEvent2: true,
            viewHome: false,
            // hideViewMap: false,
            updateNotifications: false,
        })
    }

    changeViewHome() {
        this.setState({
            ...this.state,
            viewHome: false,
            viewInfoEvent: false,
            viewInfoEvent1: false,
            viewInfoEvent2: false,
            // hideViewMap: false,
            updateNotifications: false,
        })
    }

    changeViewHome1() {
        this.setState({
            ...this.state,
            viewHome: false,
            viewInfoEvent: false,
            viewInfoEvent1: true,
            viewInfoEvent2: false,
            // hideViewMap: false,
            updateNotifications: false,
        })
    }

    changeViewHome2() {
        this.setState({
            ...this.state,
            viewHome: false,
            viewInfoEvent: false,
            viewInfoEvent1: false,
            viewInfoEvent2: true,
            // hideViewMap: false,
            updateNotifications: false,
        })
    }

    backArrow(){
        this.setState({
            ...this.state,
            viewHome: true,
            viewInfoEvent: false,
            viewInfoEvent1: false,
            viewInfoEvent2: false,
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

                {this.state.updateNotifications && <Notifications />}
                {this.state.viewHome && <Home onChangeViewEvent={this.changeViewEvent}  onChangeViewEvent1={this.changeViewEvent1} onChangeViewEvent2={this.changeViewEvent2}/>}

                <PrincipalFooter onSetNotifications={this.changeNotifications}
                    onSethideViewMap={this.changehideViewMap }/>
                {this.state.viewInfoEvent && <EventInfo onChangeBackArrow={this.backArrow} onChangeViewHome={this.changeViewHome} />}
                {this.state.viewInfoEvent1 && <EventInfo2 onChangeBackArrow={this.backArrow} onChangeViewHome1={this.changeViewHome1} />}
                {this.state.viewInfoEvent2 && <EventInfo3 onChangeBackArrow={this.backArrow} onChangeViewHome2={this.changeViewHome2} />}
            </div>
        )
    }
}
export default App;