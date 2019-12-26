import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import useInput from '../hooks/useInput'
import { Button, Form, FormGroup, Label, Input, FormText, Container, Col } from 'reactstrap';
import {  NavLink } from "react-router-dom";
import { loginActionsAsyncCreator as loginAction } from '../store/modules/auth/login.action';


const Login = (props) => {
    
    const jwt = useSelector(store => store.auth.logueo.data );
    const dispatch = useDispatch(); 
    const email = useInput('','email');
    const password = useInput('','password');

    useEffect(() => {
        if (jwt !== null) {
            props.history.push('/UserList')
        }
    }, [jwt])

  return (
    <Container className="themed-container">
        <Form>
        <Col sm={{ size: '6', offset: 3 }}>
        <h3 className="display-1" >Inicie Sesion</h3>
            <FormGroup>
                <Label >Correo Electronico</Label>
                <Input {...email} type="email" placeholder="Email" />
            </FormGroup>
        </Col>
        <Col sm={{ size: '6', offset: 3 }}>
        <FormGroup>
            <Label >Contraseña</Label>
            <Input {...password} type="password" placeholder="Contraseña" />
        </FormGroup>
        </Col>
        <Col sm={{ size: '6', offset: 3 }}>
        <Button onClick={() => dispatch(loginAction(email.value, password.value))}>Login</Button>
        <FormText >
            <label htmlFor="">¿Todavida no tienes cuenta?</label> 
            <NavLink to="/Registro" activeClassName="mi-link-activo"> Registrate!</NavLink>
        </FormText>
        </Col>
    </Form>
    </Container>
  );
}

export default Login;