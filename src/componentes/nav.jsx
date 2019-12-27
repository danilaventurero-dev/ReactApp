import React  from 'react';
import{ Nav, NavItem, Button} from 'reactstrap';
import {  NavLink as Link} from "react-router-dom";
import {useDispatch} from 'react-redux';
import { logoutAction } from '../store/modules/auth/login.action';

const Menu = ({  }) => {
    const dispatch = useDispatch();
    const handlerLogout = () => {
        dispatch(logoutAction());
      }
    return (
        <Nav vertical>
                <NavItem>
                    
                        <Link className='nav-link' to='/' >Inicio</Link>
                    
                </NavItem>
                <NavItem>
                    <Link className='nav-link' to='/login' >Inicia Sesion</Link>
                </NavItem>
                <NavItem>
                    <Link className='nav-link' to='/registro' >Crear Usuario</Link>
                </NavItem>
                <NavItem>
                <Link className='nav-link' to='#' onClick={handlerLogout} >Cerrar sesion</Link>
                </NavItem>
            </Nav>
    );
}

export default Menu;