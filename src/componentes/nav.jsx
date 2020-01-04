import React  from 'react';
import{Nav} from 'reactstrap';
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
        <div>
        <h4 >NAVEGACION</h4>
        <Nav className="flex-column nav">
            <li className="nav-item">
            <Link className='' to='/' >Inicio</Link>
            </li>
            <li className="nav-item">
            <Link className='' to='/registro' >Crear Usuario</Link>
            
            </li>
                {jwt ? (
                <div>
                    <li className="nav-item">
                    <Link className='' to='/articulo' >Crear Articulo</Link>
                    </li>
                    <li className="nav-item">
                    <Link className='' to='/articuloList' >Lista de articulos</Link>
                    </li>
                    <li className="nav-item">
                    <Link className='' to='/userList' >Lista de usuario</Link>
                    </li>
                    <li className="nav-item">
                    <Link className='' to='#' onClick={handlerLogout} >Cerrar sesion</Link>
                    </li>
                </div>
                ) : (
                    <li className="nav-item">
                        
                    <Link className='' to='/login' >Inicia Sesion</Link>
                    </li>
                )}
        </Nav>
        </div>
        
    );
}

export default Menu;