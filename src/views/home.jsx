import React, {useEffect, useContext} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Card  from '../componentes/card';
import { Container, Col, Row } from 'reactstrap';
import { getActionsAsyncCreator as getAll } from '../store/modules/articulos/getArticulos.action';
import ModalPost from '../componentes/modal'
import swal from 'sweetalert';
import Context from '../utils/Context';
const Articulos = () => {

    const dispatch = useDispatch();
    const items = useSelector(store => store.articulos.items.items);
    const createSuccess = useSelector(store => store.articulos.create.success);
    const deleteSuccess = useSelector(store => store.articulos.response.success);

    const post = useSelector(store => store.articulos.post.item);
    const updateSuccess = useSelector(store => store.articulos.post.success);
    const updateError = useSelector(store => store.articulos.post.error);
    const jwt = useSelector(store => store.auth.logueo.data );
    const context = useContext(Context)
    const {titulo} = context; 

    

    useEffect(() => {
            dispatch(getAll())      
    }, [updateSuccess])

    useEffect(() => {
        if (updateError!==false  ) {
            swal(
                'ERROR!',
                'Se ha producido un error en el servidor',
                'warning'
            );     
        }
    }, [updateError])

    useEffect(() => {
        dispatch(getAll())  
        
        if (deleteSuccess === true) {
            swal(
              'Borrado!',
              'El registro ha sido borrado',
              'success'
            );  
        }
        
    }, [createSuccess,deleteSuccess])

    return (
        <Container>
            <h1>{titulo}</h1>
        <Row>
            {items.map(item => (
               <Col key={item.id}  sm={{ size: '4', offset: 1 }}>
                    <Card deleteSuccess={deleteSuccess} dispatch={dispatch} items={item} jwt={jwt}/>
                </Col>
             ))}
             <ModalPost isOpen={updateSuccess} post={post} jwt={jwt}/>
        </Row>
        </Container>
    );
};

export default Articulos;