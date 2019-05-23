import React, { Component } from 'react';
import './Home.css'
import eventocultural from '../../images/eventocultural.png'
import image1 from '../../images/1.png'
import image2 from '../../images/2.png'
import image3 from '../../images/3.png'
import image4 from '../../images/4.png'
import image5 from '../../images/5.png'
import TelephoneNav from '../TelephoneNav/TelephoneNav.js'
import PrincipalFooter from '../PrincipalFooter/PrincipalFooter'

class Home extends Component {

    render() {
        return (
            <div className="App">
                <TelephoneNav />
                <div className="divEvents">
                    <nav className="events">
                        <h3 className="h3Events">PRÓXIMOS EVENTOS</h3>
                    </nav> 
                    <div className="photoEvents" onClick={this.props.onChangeViewEvent}>
                        <img src={eventocultural} alt="evento" className="cultural-event" />
                        <div className="cinema">Cine</div>
                        <p className="cinemaP">Cine fulldome en planetario de Santiago</p>
                    </div>

                <div className="photoEvents" >
                    <img src={image1} alt="evento" className="cultural-event" />
                    <div className="museo">Museo</div>
                    <p className="cinemaP">Museo de guardar. Colección Museo de Artes Decorativas</p>
                </div>

                <div className="photoEvents" >
                    <img src={image2} alt="evento" className="cultural-event" />
                    <div className="patrimonioCultural">Patrimonio Cultural</div>
                    <p className="cinemaP">Día del patrimonio cultural "Heroínas de nuestra historia”en el cementerio general</p>
                </div>

                <div className="photoEvents" >
                    <img src={image3} alt="evento" className="cultural-event" />
                    <div className="museo">Museo</div>
                    <p className="cinemaP">Casa museo la Chascona</p>
                </div>

                <div className="photoEvents" >
                    <img src={image4} alt="evento" className="cultural-event" />
                    <div className="museo">Museo</div>
                    <p className="cinemaP">Cementerio general: historia, memoria y derechos humanos</p>
                </div>

                <div className="photoEvents" >
                    <img src={image5} alt="evento" className="cultural-event" />
                    <div className="patrimonioCultural">Patrimonio cultural</div>
                    <p className="cinemaP">Recorrido patrimonial Recoleta Franciscana</p>
                </div>

                </div>
                <br/>
                <br/>
                <br/>
                <PrincipalFooter />

            </div>
        )
    }
}

export default Home;