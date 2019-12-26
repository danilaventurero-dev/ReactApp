import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Col } from 'reactstrap';

import {  NavLink } from "react-router-dom";

const Example = (props) => {
  return (
    <Container className="themed-container">
        <Form>
        <Col sm={{ size: '6', offset: 3 }}>
        <h3 className="display-1" >Inicie Sesion</h3>
            <FormGroup>
                <Label for="exampleEmail">Correo Electronico</Label>
                <Input type="email" name="email" id="Em" placeholder="Email" />
            </FormGroup>
        </Col>
        <Col sm={{ size: '6', offset: 3 }}>
        <FormGroup>
            <Label for="examplePassword">Contraseña</Label>
            <Input type="password" name="password" id="Ps" placeholder="Contraseña" />
        </FormGroup>
        </Col>
        <Col sm={{ size: '6', offset: 3 }}>
        <Button>Login</Button>
        <FormText >
            <label htmlFor="">¿Todavida no tienes cuenta?</label> 
            <NavLink to="/Registro" activeClassName="mi-link-activo"> Registrate!</NavLink>
        </FormText>
        </Col>
    </Form>
    </Container>
  );
}

export default Example;