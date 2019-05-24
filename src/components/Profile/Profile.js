import React, { Component } from 'react';
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
                <TelephoneNav />
                <nav className="profileNav">
                    <h3 className="perfil">PERFIL</h3>
                </nav>
                <div className="profile">
                    <img src={profilePicture} alt="Notificacion" className="profilePicture" />
                    <p className="pName">Juana Carreño</p>

                    <div className="preferences1">
                        <div className="memory" >Memoria y DD.HH</div>
                        <div className="museum">Museo</div>

                    </div>

                    <div className="preferences2">
                        <div className="cultural">Patrimonio cultural</div>
                        <div className="cine">Cine</div>
                    </div>

                    <div className="preferences3">
                        <div className="literature">Literatura</div>
                    </div>
                </div>

                <div className="settings">
                <img src={bookmark} alt="Notificacion" className="marks" />
                <img src={create} alt="Notificacion" className="marks" />
                <img src={settings} alt="Notificacion" className="marks" />
                </div>
                <div className="pSettings">
                <p>Eventos guardados</p>
                <p>Editar preferencias</p>
                <p>Configurar notificaciones</p>
                </div>

                <PrincipalFooter />
            </div>



        );
    }
}

export default Profile;