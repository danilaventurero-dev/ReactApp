import React  from 'react';
import{ Nav, NavItem} from 'reactstrap';
import {  NavLink as Link} from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux';
import { logoutAction } from '../store/modules/auth/login.action';

const Menu = () => {
    const jwt = useSelector(store => store.auth.logueo.data );
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
                    <Link className='nav-link' to='/registro' >Crear Usuario</Link>
                </NavItem>
                {jwt ? (
                <div>
                    <NavItem>
                        <Link className='nav-link' to='/articulo' >Crear Articulo</Link>
                    </NavItem>
                    <NavItem>
                    <Link className='nav-link' to='/userList' >Lista de usuario</Link>
                </NavItem>
                    <NavItem>
                        <Link className='nav-link' to='#' onClick={handlerLogout} >Cerrar sesion</Link>
                    </NavItem>
                </div>
                ) : (
                    <NavItem>
                        <Link className='nav-link' to='/login' >Inicia Sesion</Link>
                    </NavItem>
                )}

                

                
            </Nav>
    );
}

export default Menu;