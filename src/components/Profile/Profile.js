import React, {Component} from 'react';
import '../Profile/Profile.css';
import TelephoneNav from '../TelephoneNav/TelephoneNav';
import bookmark from '../../images/bookmark.png';
import settings from '../../images/settings.png';
import profilePicture from '../../images/profilePicture.jpg';
import PrincipalFooter from '../PrincipalFooter/PrincipalFooter';

class Profile extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <TelephoneNav/>

                    <h4 className="perfil">PERFIL</h4>
                    <img className="profilePicture" src={profilePicture} alt="profilePicture"/>
                    <h4 className="profileName">Juana Carreño</h4>
                    {/* <div className="activityContainer"> */}
{/*                     
                    <div className="row">
                    <button className="activity">Artes Mediales</button>
                    <button className="activity">Artes Visuales</button>
                    </div>
                    
                    <div className="row">
                        <button className="activity">Gastronomía</button>
                        <button className="activity">Museo</button>
                        <button className="activity">Música</button>
                    </div>
                    </div>*/}
                <div className="row"> 
                <img src={bookmark} alt="bookmark" className="profileIcon"/>
                <h4 className="eventName">Eventos Guardados</h4>
                </div>
                <div className="row">
                <img src={settings} alt="settings" className="profileIcon"/>
                <h4 className="eventName">Configurar notificaciones</h4>
                </div>

                <PrincipalFooter/>
                
                </div>
        );
    }
}

export default Profile;