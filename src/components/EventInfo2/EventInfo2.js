import React, { Component } from 'react';
import '../EventInfo/EventInfo';

import direction from '../../images/direction.png'
import details1 from '../../images/details1.png'
import direccion from '../../images/direccion.png'
import tiempo from '../../images/tiempo.png'
import precio from '../../images/precio.png'
import calendario from '../../images/calendario.png'
import flecha from '../../images/flecha.png'

import TelephoneNav from '../TelephoneNav/TelephoneNav'
import PrincipalFooter from '../PrincipalFooter/PrincipalFooter'

class EventInfo2 extends Component {

    render() {
        return (
            <div>
                < TelephoneNav />
                <div className="eventInfo">
                    <nav className="details">

                        <img src={flecha} alt="arrow" className="arrow" onClick={this.props.onChangeViewHome} />
                        <h3 className="h3Activity">DETALLES DE LA ACTIVIDAD</h3>
                    </nav>
                    <div className="detailsEvent">
                        <img src={details1} alt="evento" className="culturalevent" />
                        <a href="https://wego.here.com/directions/mix/Calle-Schlack-528,-8420000-Recoleta,-Region-Santiago-Metropolitan,-Chile:-33.41881,-70.64231/Avenida-Recoleta-683,-8420000-Patronato,-Recoleta,-Region-Santiago-Metropolitan,-Chile:loc-dmVyc2lvbj0xO3RpdGxlPUF2ZW5pZGErUmVjb2xldGErNjgzO2xhbmc9ZXM7bGF0PS0zMy40MjQ3OTMyNDM0MDgyO2xvbj0tNzAuNjQ1NTMwNzAwNjgzNjtzdHJlZXQ9QXZlbmlkYStSZWNvbGV0YTtob3VzZT02ODM7Y2l0eT1SZWNvbGV0YTtwb3N0YWxDb2RlPTg0MjAwMDA7Y291bnRyeT1DSEw7ZGlzdHJpY3Q9UGF0cm9uYXRvO3N0YXRlPVJlZ2lvbitTYW50aWFnbytNZXRyb3BvbGl0YW47c3RhdGVDb2RlPVJNO2NvdW50eT1TYW50aWFnbztjYXRlZ29yeUlkPWJ1aWxkaW5nO3NvdXJjZVN5c3RlbT1pbnRlcm5hbDtubGF0PS0zMy40MjQ3NzAzNTUyMjQ2MTtubG9uPS03MC42NDU2MjIyNTM0MTc5NztwZHNDYXRlZ29yeUlkPTkwMC05MzAwLTAwMDA?map=-33.42174,-70.64366,16,normal"><img src={direction} className="directionWay" /></a>
                        <div className="museo">Museo</div>
                        <p className="description">Esta exposición tiene por objetivo mostrar una selección de piezas de la colección del museo, en tanto se constituyen como objeto decorativo/utilitario, de notables características estéticas y dando cuenta de los procesos asociados a su manufactura. 
                            <br />
                            <br />
                            <img src={direccion} alt="d" className="address" />
                            <div className="addressP">
                            Av. Recoleta 683, Estación de Metro Cerro Blanco, Línea 2.
                            </div>
                            <br />
                            <img src={tiempo} alt="" className="time" />
                            <div className="timeP">
                            Martes a viernes, de 10:00 a 17:30 horas.
                            </div>
                            <br />
                            <img src={precio} alt="" className="price" />
                            <div className="priceP">
                                Gratis
                            </div>
                            <br />
                            <img src={calendario} alt="" className="calendar" />
                            <div className="calendarP">
                            16 noviembre - 31 mayo
                            </div>
                            <form action="https://wego.here.com/directions/mix/Calle-Schlack-528,-8420000-Recoleta,-Region-Santiago-Metropolitan,-Chile:-33.41881,-70.64231/Avenida-Recoleta-683,-8420000-Patronato,-Recoleta,-Region-Santiago-Metropolitan,-Chile:loc-dmVyc2lvbj0xO3RpdGxlPUF2ZW5pZGErUmVjb2xldGErNjgzO2xhbmc9ZXM7bGF0PS0zMy40MjQ3OTMyNDM0MDgyO2xvbj0tNzAuNjQ1NTMwNzAwNjgzNjtzdHJlZXQ9QXZlbmlkYStSZWNvbGV0YTtob3VzZT02ODM7Y2l0eT1SZWNvbGV0YTtwb3N0YWxDb2RlPTg0MjAwMDA7Y291bnRyeT1DSEw7ZGlzdHJpY3Q9UGF0cm9uYXRvO3N0YXRlPVJlZ2lvbitTYW50aWFnbytNZXRyb3BvbGl0YW47c3RhdGVDb2RlPVJNO2NvdW50eT1TYW50aWFnbztjYXRlZ29yeUlkPWJ1aWxkaW5nO3NvdXJjZVN5c3RlbT1pbnRlcm5hbDtubGF0PS0zMy40MjQ3NzAzNTUyMjQ2MTtubG9uPS03MC42NDU2MjIyNTM0MTc5NztwZHNDYXRlZ29yeUlkPTkwMC05MzAwLTAwMDA?map=-33.42174,-70.64366,16,normal">
                                <input type="submit" value="¿Cómo llegar?" className="goTo1" />
                            </form>
                            {/* Mantener estos 4 br, evita que el PrincipalFooter tape información
                            */}
                            <br />
                            <br />
                            <br />
                        </p>
                    </div>
                </div>

                < PrincipalFooter />
            </div>
        )
    }
}

export default EventInfo2;