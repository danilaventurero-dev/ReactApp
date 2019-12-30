import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter , Form, FormGroup, Label, Input,  Col} from 'reactstrap';
import {useDispatch} from 'react-redux'
import useInput from '../hooks/useInput'
import {updateActionsAsyncCreator as updateAction} from '../store/modules/articulos/updateArticulos.action'
import {findActionsAsyncCreator as findArticulos} from '../store/modules/articulos/finArticulos.action';
import { getActionsAsyncCreator as getAll } from '../store/modules/articulos/getArticulos.action';
import {useEffect} from 'react';

const ModalPost = (props) => {
  const {
    isOpen,
    post
  } = props;

  useEffect((band) => {
    console.log(band);
    dispatch(getAll())
}, [isOpen])

  const dispatch = useDispatch();
  const title = useInput(post ? post.title : '','title')
  const description = useInput(post ? post.description: '','description');
  const image_url = useInput( post ? post.image_url : '','image_url');

  const [modal, setModal] = useState(isOpen);

  const toggle = () =>  setModal(false);
  
  const lanza = () => {
    
    const articulo = {
        title: title.value,
        description: description.value,
        image_url: image_url.value,
    }

    dispatch(updateAction(articulo,post.id));
    
    dispatch(findArticulos());
    dispatch(getAll());

  } 

  const cerrar = () => {
    
    dispatch(findArticulos())
  } 

  const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={cerrar}>&times;</button>;
  return (
    <div>
     
      <Modal isOpen={isOpen} toggle={toggle}  external={externalCloseBtn}>
        <ModalHeader>Editar Articulo!</ModalHeader>
        <ModalBody>
          <Form>
            <Col sm={{ size: '6', offset: 3 }}>
            <h3 className="display-1" >Titulo!</h3>
                <FormGroup>
                    <Label for="title">Titulo</Label>
                    <Input {...title} placeholder="Titulo"  />
                </FormGroup>
            </Col>

            <Col sm={{ size: '6', offset: 3 }}>
                <FormGroup>
                    <Label for="description">Descripcion</Label>
                    <Input  {...description} placeholder="Description" type="textarea" />
                </FormGroup>
            </Col>

            <Col sm={{ size: '6', offset: 3 }}>
            <FormGroup>
                <Label for="image_url">Url a imagen</Label>
                <Input {...image_url} placeholder="Imagen" />
            </FormGroup>
            </Col>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={lanza}>Guardar</Button>{' '}
          <Button color="secondary" onClick={cerrar}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalPost;