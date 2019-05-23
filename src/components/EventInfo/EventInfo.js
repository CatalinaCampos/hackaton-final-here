import React, { Component } from 'react';
import './EventInfo.css';

import eventocultural from '../../images/eventocultural.png'
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
                < TelephoneNav />
                <div className="eventInfo">
                    <nav className="details">
                    <img src={flecha} alt="arrow" className="arrow" />
                        <h3 className="h3Activity">DETALLES DE LA ACTIVIDAD</h3>
                    </nav> 
                    <div className="detailsEvent">
                        <img src={eventocultural} alt="evento" className="culturalevent" />
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

                            <div className="interactiveMap">

                            </div>

                            {/* Mantener estos 4 br, evita que el PrincipalFooter tape información */}
                            <br />
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

export default EventInfo;