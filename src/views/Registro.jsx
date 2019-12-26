import React from 'react';
import {useDispatch} from 'react-redux'
import { Button, Form, FormGroup, Label, Input,  Container, Col } from 'reactstrap';
import useInput from '../hooks/useInput'
import {saveActionsAsyncCreator as createAction} from '../store/modules/user/create.action'

//import {  NavLink } from "react-router-dom";

const Registro = (props) => {
    const dispatch = useDispatch();
    const nombre = useInput('','nombre')
    const email = useInput('','email');
    const password = useInput('','password');

    const registerUser = () =>{
        const user = {
            name: nombre.value,
            email: email.value,
            password: password.value
        }
        dispatch(createAction(user)) ;
    }

  return (
    <Container className="themed-container">
        <Form>
        <Col sm={{ size: '6', offset: 3 }}>
        <h3 className="display-1" >Registro!</h3>
            <FormGroup>
                <Label for="nombre">Nombre</Label>
                <Input {...nombre} placeholder="Nombre" />
            </FormGroup>
        </Col>
        <Col sm={{ size: '6', offset: 3 }}>
            <FormGroup>
                <Label for="Email">Correo Electronico</Label>
                <Input {...email} placeholder="Email" />
            </FormGroup>
        </Col>
        <Col sm={{ size: '6', offset: 3 }}>
        <FormGroup>
            <Label for="Password">Contraseña</Label>
            <Input {...password} placeholder="Contraseña" />
        </FormGroup>
        </Col>
        <Col sm={{ size: '6', offset: 3 }}>
        <Button onClick={(registerUser)} >Registro</Button>
        </Col>
    </Form>
    </Container>
  );
}

export default Registro;