import React, {useContext} from 'react';
import Articulo from '../componentes/articulo'
import { Container } from 'reactstrap';
import Context from '../utils/Context';



const DetalleArticulo = () => {

    const context = useContext(Context)
    const {titulo} = context; 
    return (
        <Container>
        <h1>{titulo}</h1>
        <Articulo/>
        </Container>
    );
};

export default DetalleArticulo;