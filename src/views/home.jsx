import React, {useEffect} from 'react';
//import { useDispatch, useSelector } from 'react-redux';
import {useDispatch, useSelector} from 'react-redux';
import Card  from '../componentes/card';
import { Container, Col, Row } from 'reactstrap';
import { getActionsAsyncCreator as getAll } from '../store/modules/articulos/getArticulos.action';
import ModalPost from '../componentes/modal'

const Articulos = (props) => {

    const dispatch = useDispatch();

    const solicitud = false; //useSelector(store => store.articulos.post.solicitud);
    
    const items = useSelector(store => store.articulos.items.items);
    const success = useSelector(store => store.articulos.items.success);
    const post = useSelector(store => store.articulos.post.item);
    const jwt = useSelector(store => store.auth.logueo.data );

    useEffect(() => {
        debugger
        dispatch(getAll())
    }, [items])
    
    return (
        <Container>
        <Row>
            {items.map(item => (
               <Col key={item.id}  sm={{ size: '4', offset: 1 }}>
                    <Card dispatch={dispatch} items={item} jwt={jwt}/>
                </Col>
             ))}
             <ModalPost isOpen={false} post={post} />
        </Row>
        </Container>
    );
};

export default Articulos;