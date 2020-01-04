import React, {useEffect, useContext} from 'react';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux';
import Table from '../componentes/tablaClase';
import { Container } from 'reactstrap';
import { getActionsAsyncCreator as getAll } from '../store/modules/articulos/getArticulos.action';
import Context from '../utils/Context';

const ArticuloList = (props) => {

    const dispatch = useDispatch();
    const jwt = useSelector(store => store.auth.logueo.data );
    
    const items = useSelector(store => store.articulos.items.items );

    const context = useContext(Context)
    const {titulo} = context; 
    
    useEffect(() => {
        console.log(dispatch(getAll(jwt)))
    }, [dispatch])    

    return (
        <Container >
            <h1>{titulo}</h1>
            <Table
                items={items}
            />
        </Container>
    );
};


export default ArticuloList;