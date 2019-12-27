import React, {useEffect} from 'react';
//import { useDispatch, useSelector } from 'react-redux';
import {connect,useDispatch, useSelector} from 'react-redux';
import Card  from '../componentes/card';
import { Container, Col, Row, H2 } from 'reactstrap';
import { getActionsAsyncCreator as getAll } from '../store/modules/articulos/getArticulos.action';
import ModalPost from '../componentes/modal'

const Articulos = (props) => {

    const dispatch = useDispatch();
    const value = useSelector(store => store.articulos.response.message);
    const post = useSelector(store => store.articulos.post.items);
    const jwt = useSelector(store => store.auth.logueo.data );

    useEffect(() => {
        dispatch(getAll())
    }, [value])

    useEffect(() => {   
        
        
    }, [post])

    const {
        items,
    } = props;
    

    return (
          <div>
<Container>
            
            <Row>
            {items.map(item => (
                
               <Col key={item.id}  sm={{ size: '4', offset: 2 }}>
               
                    <Card dispatch={dispatch} items={item} jwt={jwt}/>
                   
                </Col>
             ))}
             </Row>
        </Container>

        />
          </div>
        
    );
};

// simplemente se retorna la parte de los items al componente
const mapStateToProps = state => state.articulos.items;

export default connect(
    mapStateToProps
)(Articulos);