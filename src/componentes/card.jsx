
import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import {  NavLink as Link} from "react-router-dom";
import { deleteActionsAsyncCreator as deleteAction } from '../store/modules/articulos/deleteArticulos.action'
import { findActionsAsyncCreator as findAction } from '../store/modules/articulos/finArticulos.action'
import swal from 'sweetalert';



const card = ({dispatch,items, jwt}) => {

  const deleteItem = (id) => {
    return function borrado () {
    
    swal({
      title: 'Estas seguro ?',
      text: "Desea borrar de forma permanente !",
      icon: 'warning',
      dangerMode: true,
      buttons: true,
    }).then(function(isConfirm) {
      if (isConfirm) {
        dispatch(deleteAction(id));
        swal(
          'Borrado!',
          'El registro ha sido borrado',
          'success'
        ); 
      }
  
    })    
    }
  }
  return (
    <div>
      <Card>
        <Link className='' to='/' >
        <CardImg top width="100%" src={items.image_url} alt="Card image cap" />
        </Link>
        <CardBody>
          <CardTitle>{items.title}</CardTitle>
          <CardSubtitle>{items.description}</CardSubtitle>
          <CardText></CardText>
          {jwt ? (
            <div>
            <Button color="primary" size="sm" onClick={() => dispatch(findAction(items.id))} > Editar</Button>
            <Button color="danger" size="sm" onClick={ deleteItem(items.id)} > Borrar</Button>
            </div>
          ) : (""
          )}

        </CardBody>
      </Card>
    </div>
  );
};

export default card;