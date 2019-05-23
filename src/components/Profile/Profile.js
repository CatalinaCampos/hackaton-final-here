import React, {Component} from 'react';
import '../Profile/Profile.css';
import TelephoneNav from '../TelephoneNav/TelephoneNav';
import bookmark from '../../images/bookmark.png';
import settings from '../../images/settings.png';
import create from '../../images/create.png';
import profilePicture from '../../images/profilePicture.jpg';
import PrincipalFooter from '../PrincipalFooter/PrincipalFooter';

class Profile extends Component {
    render() { 
        return ( 
            <div>
                <TelephoneNav/>
                <div className="container">
                    <h4 className="perfil">PERFIL</h4>
                    <img className="profilePicture" src={profilePicture} alt="profilePicture"/>
                    <h4 className="profileName">Juana Carreño</h4>
                    <div className="activityContainer">
                
                    <div className="row">
                    <button className="activity">Museo</button>
                    <button className="activity">Patrimonio Cultural</button>
                    </div>
                    
                    <div className="row">
                        <button className="activity">Gastronomía</button>
                        <button className="activity">Artes Visuales</button>
                        <button className="activity">Música</button>
                    </div>

                    <div className="row">
                        <button className="activity">Literatura</button>
                        <button className="activity">Teatro</button>
                    </div>

                    </div>
                <div className="row"> 
                <img src={bookmark} alt="bookmark" className="profileIcon"/>
                <h4 className="eventName">Eventos Guardados</h4>
                </div>

                <div className="row">
                <img src={create} alt="settings" id="profileIconC" className="profileIconC"/>
                <h4 className="eventNameC" id="eventNameC">Editar preferencias</h4>
                </div>

                <div className="row">
                <img src={settings} alt="settings" id="profileIconS" className="profileIconS"/>
                <h4 className="eventNames" id="eventNames">Config. notificaciones</h4>
                </div>
                </div>
                <PrincipalFooter/>
                
                </div>
        );
    }
}

export default Profile;