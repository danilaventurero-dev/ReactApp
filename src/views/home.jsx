import React, {useEffect} from 'react';
//import { useDispatch, useSelector } from 'react-redux';
import {useDispatch, useSelector} from 'react-redux';
import Card  from '../componentes/card';
import { Container, Col, Row } from 'reactstrap';
import { getActionsAsyncCreator as getAll } from '../store/modules/articulos/getArticulos.action';
import ModalPost from '../componentes/modal'

const Articulos = () => {

    const dispatch = useDispatch();
    const items = useSelector(store => store.articulos.items.items);
    const createSuccess = useSelector(store => store.articulos.create.success);
    const deleteSuccess = useSelector(store => store.articulos.response.success);

    const post = useSelector(store => store.articulos.post.item);
    const jwt = useSelector(store => store.auth.logueo.data );

    useEffect(() => {
            dispatch(getAll())      
    }, [])

    useEffect(() => {
        dispatch(getAll())      
}, [createSuccess,deleteSuccess])

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