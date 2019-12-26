import React, {useEffect} from 'react';
//import { useDispatch, useSelector } from 'react-redux';
import {connect,useDispatch} from 'react-redux';
import Card  from '../componentes/card';
import { Container } from 'reactstrap';
import { getActionsAsyncCreator as getAll } from '../store/modules/articulos/getArticulos.action';

const Articulos = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        console.log(dispatch(getAll()))
    }, [dispatch])

    const {
        items
    } = props;
    

    return (
        <Container >
            <Card
                items={items}
            />
        </Container>
    );
};

// simplemente se retorna la parte de los items al componente
const mapStateToProps = state => state.articulos.items.items;

export default connect(
    mapStateToProps
)(Articulos);