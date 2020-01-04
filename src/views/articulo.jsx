import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import {connect} from 'react-redux';
import {createActionsAsyncCreator as createAction} from '../store/modules/articulos/createArticulos.action'
import useInput from '../hooks/useInput'
import {Button, Form, FormGroup, Label, Input,  Container, Col  } from 'reactstrap';
import swal from 'sweetalert';

const ArticuloCreate = (props) => {
    const dispatch = useDispatch();
    const title = useInput('','title')
    const description = useInput('','description');
    const image_url = useInput('','image_url');
    const message = useSelector(store => store.articulos.create.success );
    const jwt = useSelector(store => store.auth.logueo.data );
 
    const guardarArticulo = () =>{
        
        const articulo = {
            title: title.value,
            description: description.value,
            image_url: image_url.value
        }
        dispatch(createAction(jwt,articulo)) ;
    }

    useEffect(() => {
       if (message) {
        props.history.push('/')  
        swal("Articulo Creado con exito",{
                title: "Perfecto"  ,
                icon: "success",
                buttons: [""],
                timer:1500
              });     
       }
    }, [message])

    return (
        <Container className="themed-container">
        <Form>
        <Col sm={{ size: '6', offset: 3 }}>
        <h3 className="display-1" >Articulo!</h3>
            <FormGroup>
                <Label for="titulo">Titulo</Label>
                <Input {...title} placeholder="Titulo" />
            </FormGroup>
        </Col>
        <Col sm={{ size: '6', offset: 3 }}>
            <FormGroup>
                <Label for="description">Descripcion</Label>
                <Input {...description} placeholder="Description" type="textarea" />
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