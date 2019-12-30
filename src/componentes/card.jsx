
import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { deleteActionsAsyncCreator as deleteAction } from '../store/modules/articulos/deleteArticulos.action'
import { findActionsAsyncCreator as findAction } from '../store/modules/articulos/finArticulos.action'



const card = ({dispatch,items, jwt}) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={items.image_url} alt="Card image cap" />
        <CardBody>
          <CardTitle>{items.title}</CardTitle>
          <CardSubtitle>{items.description}</CardSubtitle>
          <CardText></CardText>
          {jwt ? (
            <div>
            <Button color="primary" size="sm" onClick={() => dispatch(findAction(items.id))} > Editar</Button>
            <Button color="danger" size="sm" onClick={() => dispatch(deleteAction(items.id))} > Borrar</Button>
            </div>
          ) : (""
          )}

        </CardBody>
      </Card>
    </div>
  );
};

export default card;