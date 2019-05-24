import React, {Component} from 'react';
import './Preferences.css';
import TelephoneNav from '../TelephoneNav/TelephoneNav';
import Barra from '../../images/Group 3.png';

class Preferences extends Component {
    
    render() { 
        return (
            <div>
                <TelephoneNav/>
                <h4 className="preferences">COMPLETA TUS PREFERENCIAS</h4>
                <h5 className="areasInt">Selecciona tus áreas de interés</h5>

                <div className="container">
                <div className="row">
                    <button className="activity" id="selectedColor">Museo</button>
                    <button className="activity">Patrimonio Cultural</button>
                    <button className="activity" id="selectedColor">Música</button>
                    </div>
                    
                    <div className="row">
                        <button className="activity">Gastronomía</button>
                        <button className="activity" id="selectedColor">Artes Visuales</button>
                        <button className="activity" >Danza</button>
                        <button className="activity" id="selectedColor">Diseño</button>
                        <button className="activity">Ciencias</button>
                        <button className="activity">Migrantes</button> 
                    </div>

                    <div className="row">
                        <button className="activity">Literatura</button>
                        <button className="activity">Teatro</button>
                        <button className="activity">Fotografía</button>
                        <button className="activity" id="selectedColor">Cine</button>
                    </div>
                    </div>
                    <h5 className="areasInt">¿Actividades a cuántos Km, desde tu ubicación, quieres que te notifiquemos?</h5>
                    <div>
                        <img src={Barra} alt="barra" className="barra"/>
                    </div>
                    <button className="continue">Continuar</button>
            </div>
        );
    }
}

export default Preferences;