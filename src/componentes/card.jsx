
import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { deleteActionsAsyncCreator as deleteAction } from '../store/modules/articulos/deleteArticulos.action'



const card = ({dispatch,items}) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={items.image_url} alt="Card image cap" />
        <CardBody>
          <CardTitle>{items.title}</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>{items.id}</CardText>
          <Button onClick={() => dispatch(deleteAction(items.id))} > Borrar</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default card;