import React, { Component } from 'react';
import '../EventInfo/EventInfo';

import direction from '../../images/direction.png'
import details3 from '../../images/details3.png'
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
                        <img src={details3} alt="evento" className="culturalevent" />
                        <a href="https://wego.here.com/directions/mix/Calle-Schlack-528,-8420000-Recoleta,-Region-Santiago-Metropolitan,-Chile:-33.41881,-70.64231/Pasaje-Fernando-M%C3%A1rquez-de-la-Plata-0192,-7500000-Providencia,-Providencia,-Region-Santiago-Metropolitan,-Chile:loc-dmVyc2lvbj0xO3RpdGxlPVBhc2FqZStGZXJuYW5kbytNJUMzJUExcnF1ZXorZGUrbGErUGxhdGErMDE5MjtsYW5nPWVzO2xhdD0tMzMuNDMxMTk4MTIwMTE3MTk7bG9uPS03MC42MzQ1MzY3NDMxNjQwNjtzdHJlZXQ9UGFzYWplK0Zlcm5hbmRvK00lQzMlQTFycXVleitkZStsYStQbGF0YTtob3VzZT0wMTkyO2NpdHk9UHJvdmlkZW5jaWE7cG9zdGFsQ29kZT03NTAwMDAwO2NvdW50cnk9Q0hMO2Rpc3RyaWN0PVByb3ZpZGVuY2lhO3N0YXRlPVJlZ2lvbitTYW50aWFnbytNZXRyb3BvbGl0YW47c3RhdGVDb2RlPVJNO2NvdW50eT1TYW50aWFnbztjYXRlZ29yeUlkPWJ1aWxkaW5nO3NvdXJjZVN5c3RlbT1pbnRlcm5hbDtubGF0PS0zMy40MzEyMjEwMDgzMDA3ODtubG9uPS03MC42MzQ1NTIwMDE5NTMxMjtwZHNDYXRlZ29yeUlkPTkwMC05MzAwLTAwMDA?map=-33.42594,-70.6318,15,normal"><img src={direction} className="directionWay" /></a>
                        <div className="museo">Museo</div>
                        <p className="description">Pablo Neruda empezó a construir en 1953 una casa en Santiago para Matilde Urrutia, su amor secreto de entonces. En su honor la bautizó “La Chascona”, que era el apodo que él le daba a ella por su abundante cabellera rojiza.
                            <br />
                            <br />
                            <img src={direccion} alt="d" className="address" />
                            <div className="addressP">
                                Fernando Márquez de la Plata 0192, Barrio Bellavista, Providencia, Santiago.
                            </div>
                            <br />
                            <img src={tiempo} alt="" className="time" />
                            <div className="timeP">
                                Marzo a Diciembre: martes a domingo, de 10:00 a 18:00 hrs.
                            </div>
                            <br />
                            <img src={precio} alt="" className="price" />
                            <div className="priceP">
                                $7000
                            </div>
                            <br />
                            <img src={calendario} alt="" className="calendar" />
                            <div className="calendarP">
                                02 enero - 31 diciembre
                            </div>
                            <form action="https://wego.here.com/directions/mix/Calle-Schlack-528,-8420000-Recoleta,-Region-Santiago-Metropolitan,-Chile:-33.41881,-70.64231/Pasaje-Fernando-M%C3%A1rquez-de-la-Plata-0192,-7500000-Providencia,-Providencia,-Region-Santiago-Metropolitan,-Chile:loc-dmVyc2lvbj0xO3RpdGxlPVBhc2FqZStGZXJuYW5kbytNJUMzJUExcnF1ZXorZGUrbGErUGxhdGErMDE5MjtsYW5nPWVzO2xhdD0tMzMuNDMxMTk4MTIwMTE3MTk7bG9uPS03MC42MzQ1MzY3NDMxNjQwNjtzdHJlZXQ9UGFzYWplK0Zlcm5hbmRvK00lQzMlQTFycXVleitkZStsYStQbGF0YTtob3VzZT0wMTkyO2NpdHk9UHJvdmlkZW5jaWE7cG9zdGFsQ29kZT03NTAwMDAwO2NvdW50cnk9Q0hMO2Rpc3RyaWN0PVByb3ZpZGVuY2lhO3N0YXRlPVJlZ2lvbitTYW50aWFnbytNZXRyb3BvbGl0YW47c3RhdGVDb2RlPVJNO2NvdW50eT1TYW50aWFnbztjYXRlZ29yeUlkPWJ1aWxkaW5nO3NvdXJjZVN5c3RlbT1pbnRlcm5hbDtubGF0PS0zMy40MzEyMjEwMDgzMDA3ODtubG9uPS03MC42MzQ1NTIwMDE5NTMxMjtwZHNDYXRlZ29yeUlkPTkwMC05MzAwLTAwMDA?map=-33.42594,-70.6318,15,normal">
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