import React, { Component } from 'react';
import './EventInfo.css';

import direction from '../../images/direction.png'
import eventdetails from '../../images/eventdetails.png'
import direccion from '../../images/direccion.png'
import tiempo from '../../images/tiempo.png'
import precio from '../../images/precio.png'
import calendario from '../../images/calendario.png'
import flecha from '../../images/flecha.png'

import TelephoneNav from '../TelephoneNav/TelephoneNav'
import PrincipalFooter from '../PrincipalFooter/PrincipalFooter'

class EventInfo extends Component {


    render() {
        return (
            <div>
                <div className="eventInfo">
                    <nav className="details">

                        <img src={flecha} alt="arrow" className="arrow" onClick={this.props.onChangeViewHome} />
                        <h3 className="h3Activity">DETALLES DE LA ACTIVIDAD</h3>
                    </nav>
                    <div className="detailsEvent">
                        <img src={eventdetails} alt="evento" className="culturalevent" />
                        <a href="https://wego.here.com/directions/mix/Calle-Schlack-528,-8420000-Recoleta,-Regi%C3%B3n-Metropolitana-de-Santiago,-Rep%C3%BAblica-de-Chile:-33.41881,-70.64231/Avenida-Libertador-Bernardo-OHiggins-3349,-9160000-Estaci%C3%B3n-Central,-Estaci%C3%B3n-Central,-Regi%C3%B3n-Metropolitana-de-Santiago,-Chile:loc-dmVyc2lvbj0xO3RpdGxlPUF2ZW5pZGErTGliZXJ0YWRvcitCZXJuYXJkbytPJTI3SGlnZ2lucyszMzQ5O2xhbmc9ZXM7bGF0PS0zMy40NTA2ODc0MDg0NDcyNjY7bG9uPS03MC42NzkzNjcwNjU0Mjk2OTtzdHJlZXQ9QXZlbmlkYStMaWJlcnRhZG9yK0Jlcm5hcmRvK08lMjdIaWdnaW5zO2hvdXNlPTMzNDk7Y2l0eT1Fc3RhY2klQzMlQjNuK0NlbnRyYWw7cG9zdGFsQ29kZT05MTYwMDAwO2NvdW50cnk9Q0hMO2Rpc3RyaWN0PUVzdGFjaSVDMyVCM24rQ2VudHJhbDtzdGF0ZT1SZWdpJUMzJUIzbitNZXRyb3BvbGl0YW5hK2RlK1NhbnRpYWdvO3N0YXRlQ29kZT1STTtjb3VudHk9U2FudGlhZ287Y2F0ZWdvcnlJZD1idWlsZGluZztzb3VyY2VTeXN0ZW09aW50ZXJuYWw7bmxhdD0tMzMuNDUwNzkwNDA1MjczNDQ7bmxvbj0tNzAuNjc5MzQ0MTc3MjQ2MTtwZHNDYXRlZ29yeUlkPTkwMC05MzAwLTAwMDA?map=-33.43428,-70.66094,14,normal"><img src={direction} className="directionWay" /></a>
                        <div className="cinemaInfo">Cine</div>
                        <p className="description">Películas fulldome 360 inmersiva de temática astronómica.
                            <br />Además, después de cada función se realizan actividades y talleres para disfrutar la astronomía de manera entretenida. Hay 4 películas a disposición
                            <br />
                            <br />
                            14:00 Bot y Lu Misión H2O
                            <br />
                            15:00 3, 2, 1 ¡Despegue!
                            <br />
                            16:00 Sistema Solar con los ojos del siglo XXI
                            <br />
                            17:00 Dark Universe
                            <br />
                            <br />
                            <img src={direccion} alt="d" className="address" />
                            <div className="addressP">
                                Av Libertador Bernardo O'Higgins 3349, Santiago, Estación Central, Región Metropolitana
                            </div>
                            <br />

                            <img src={tiempo} alt="" className="time" />
                            <div className="timeP">
                                45 minutos
                            </div>
                            <br />
                            <img src={precio} alt="" className="price" />
                            <div className="priceP">
                                $4.700 adultos, $3.700 niños
                            </div>
                            <br />
                            <img src={calendario} alt="" className="calendar" />
                            <div className="calendarP">
                                10 mayo - 2 junio
                            </div>
                            <form action="https://wego.here.com/directions/mix/Calle-Schlack-528,-8420000-Recoleta,-Regi%C3%B3n-Metropolitana-de-Santiago,-Rep%C3%BAblica-de-Chile:-33.41881,-70.64231/Avenida-Libertador-Bernardo-OHiggins-3349,-9160000-Estaci%C3%B3n-Central,-Estaci%C3%B3n-Central,-Regi%C3%B3n-Metropolitana-de-Santiago,-Chile:loc-dmVyc2lvbj0xO3RpdGxlPUF2ZW5pZGErTGliZXJ0YWRvcitCZXJuYXJkbytPJTI3SGlnZ2lucyszMzQ5O2xhbmc9ZXM7bGF0PS0zMy40NTA2ODc0MDg0NDcyNjY7bG9uPS03MC42NzkzNjcwNjU0Mjk2OTtzdHJlZXQ9QXZlbmlkYStMaWJlcnRhZG9yK0Jlcm5hcmRvK08lMjdIaWdnaW5zO2hvdXNlPTMzNDk7Y2l0eT1Fc3RhY2klQzMlQjNuK0NlbnRyYWw7cG9zdGFsQ29kZT05MTYwMDAwO2NvdW50cnk9Q0hMO2Rpc3RyaWN0PUVzdGFjaSVDMyVCM24rQ2VudHJhbDtzdGF0ZT1SZWdpJUMzJUIzbitNZXRyb3BvbGl0YW5hK2RlK1NhbnRpYWdvO3N0YXRlQ29kZT1STTtjb3VudHk9U2FudGlhZ287Y2F0ZWdvcnlJZD1idWlsZGluZztzb3VyY2VTeXN0ZW09aW50ZXJuYWw7bmxhdD0tMzMuNDUwNzkwNDA1MjczNDQ7bmxvbj0tNzAuNjc5MzQ0MTc3MjQ2MTtwZHNDYXRlZ29yeUlkPTkwMC05MzAwLTAwMDA?map=-33.43428,-70.66094,14,normal">
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
            </div>
        )
    }
}

export default EventInfo;