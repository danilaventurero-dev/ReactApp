import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { findActionsAsyncCreator as findAction } from '../store/modules/articulos/finArticulos.action'
import { useParams } from 'react-router-dom';

const Articulo = (props) => {
    const dispatch = useDispatch();
    const {id} = useParams();
    
    const jwt = useSelector(store => store.auth.logueo.data );
    const success = useSelector(store => store.articulos.post.success );
    
    useEffect(() => {
        dispatch(findAction( jwt,id))     
    }, [])

    useEffect(() => {
        dispatch(findAction( ))     
    }, [success])

    const post = useSelector(store => store.articulos.post.item )
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">{post.title}</h1>
        <p className="lead">{post.description}</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
        </p>
      </Jumbotron>
    </div>
  );
};

export default Articulo;