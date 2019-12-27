import { ARTICULO_FIND, ARTICULO_EMPTY  } from './const';

import { findService } from '../../../services/articulo.services';

const findActionCreator = (data) =>  ({
    type: ARTICULO_FIND,
    payload: data
});

const emptyPostActionCreator = () =>  ({
    type: ARTICULO_EMPTY,
    payload: ''
});

export const findActionsAsyncCreator = (id) => {
    return (dispatch, getStore) => {
        if(id){    
            findService(id).then(data => {
                dispatch(findActionCreator(data.data));
            }).catch(err => {
                console.log(err);
            })
        }else{
            dispatch(emptyPostActionCreator())
        }
        
        
        
    }
}