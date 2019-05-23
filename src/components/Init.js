import React, {Component} from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'

class Init extends Component {
    state = {  }
    render() { 
        return ( 
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Vive Cultura</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="#home">Inicio</Nav.Link>
                <Nav.Link href="#features">Perfil</Nav.Link>
                <Nav.Link href="#pricing">Notificaciones</Nav.Link>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search a place" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </div> 
        );
    }
}

export default Init;