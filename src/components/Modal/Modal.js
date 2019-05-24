import React, {Component} from 'react';
import './Modal.css';
import Modal from 'react-responsive-modal';

class ModalM extends Component {
    state = {
        open: false,
    };
    
    onOpenModal = () => {
        this.setState({ open: true });
    };
    
    onCloseModal = () => {
        this.setState({ open: false });
    };
    
    render() {
        const { open } = this.state;
        return (
        <div>
            <button onClick={this.onOpenModal}>Pin</button>
            <Modal open={open} onClose={this.onCloseModal} center>
            <h2> Museo</h2>
            <p>Dirección:Av. Recoleta 683, Estación de Metro Cerro Blanco, Línea 2.</p>
            <button href="">Más información</button>
            </Modal>
        </div>
        );
    }
}

export default ModalM;