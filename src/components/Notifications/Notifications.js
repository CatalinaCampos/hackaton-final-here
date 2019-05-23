import React, {Component} from 'react';
import './Notifications.css'
import TelephoneNav from '../TelephoneNav/TelephoneNav'
import PrincipalFooter from '../PrincipalFooter/PrincipalFooter'
import notification1 from '../../images/notification1.png'
import notification2 from '../../images/notification2.png'
import notification3 from '../../images/notification3.png'

class Notifications extends Component{
    render(){
        return(
            <div className="notification">
            <div> 
                <nav>
                    <h3 className="notifications">NOTIFICACIONES</h3>
                </nav>
                <div className="notify">
                <img src={notification1} alt="Notificacion" className="notification1" />
                <p className="pNotification">Pobladoras, resistencia y organización</p>
                <div className="memoryTag">Memoria y DD.HH.</div>
                </div>

                <div className="notify2">
                <img src={notification2} alt="Notificacion" className="notification1" />
                <p className="pNotification">Museo de guardar. Colección Museo de Artes Decorativas</p>
                <div className="museoTag">Museo</div>
                </div>

                <div className="notify3">
                <img src={notification3} alt="Notificacion" className="notification1" />
                <p className="pNotification">Biblioteca Pablo Neruda en el Parque de la Infancia</p>
                <div className="literaturaTag">Literatura</div>
                </div>
            </div>
            </div>
        )
    }
}
export default Notifications;
