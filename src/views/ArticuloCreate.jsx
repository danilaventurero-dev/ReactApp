import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import {connect} from 'react-redux';
import {createActionsAsyncCreator as createAction} from '../store/modules/articulos/createArticulos.action'
import useInput from '../hooks/useInput'
import {Button, Form, FormGroup, Label, Input,  Container, Col  } from 'reactstrap';

const ArticuloCreate = (props) => {
    const dispatch = useDispatch();
    const title = useInput('','title')
    const description = useInput('','description');
    const image_url = useInput('','image_url');
    
    const message = useSelector(store => store.articulos.create.success );
 
    const guardarArticulo = () =>{
        
        const articulo = {
            title: title.value,
            description: description.value,
            image_url: image_url.value
        }
        console.log(articulo)
        debugger
        dispatch(createAction(articulo)) ;
    }

    useEffect(() => {
        if (message ==='success' ) {
            props.history.push('/')
            
        }
    }, [message])

    const {
        
    } = props;
    

    return (
        <Container className="themed-container">
        <Form>
        <Col sm={{ size: '6', offset: 3 }}>
        <h3 className="display-1" >Articulo!</h3>
            <FormGroup>
                <Label for="titulo">Titulo</Label>
                <Input {...title} placeholder="titulo" />
            </FormGroup>
        </Col>
        <Col sm={{ size: '6', offset: 3 }}>
            <FormGroup>
                <Label for="description">Descripcion</Label>
                <Input {...description} placeholder="description" type="textarea" />
            </FormGroup>
        </Col>
        <Col sm={{ size: '6', offset: 3 }}>
        <FormGroup>
            <Label for="image_url">URL IMAGE</Label>
            <Input {...image_url} placeholder="URL IMAGEN" />
        </FormGroup>
        </Col>
        <Col sm={{ size: '6', offset: 3 }}>
        <Button onClick={(guardarArticulo)} color="primary" >Guardar</Button>
        </Col>
    </Form>
    </Container>
  );
};

export default ArticuloCreate;