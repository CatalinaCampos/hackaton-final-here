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
import { faStroopwafel, faHome, faMap } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faStroopwafel, faHome, faMap)


class App extends Component {
 constructor(props) {
   super(props);

   this.state = {
    app_id:"68jKP099OUN8oLgbd5Jq",
    app_code:"Rb8T_A8l4p9bEPt2eawMCA",
     startPoint: {
       lat: '',
       long: '',
     },
     endPoint: {
       lat: '',
       long: '',
     },
   }

   this.functionCoordUser = this.functionCoordUser.bind(this);

 }

 componentDidMount() {
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

 async functionCoordUser (start, end) {
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

 render() {
   return (
     <div className="App">
       <Map
         app_id={this.state.app_id}
         app_code={this.state.app_code}
         lat="-33.4489"
         lng="-70.6693"
         zoom="13"
         startPoint={this.state.startPoint}
         endPoint={this.state.endPoint}

       />
      <SearchDirection coordUser={this.functionCoordUser}/>

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