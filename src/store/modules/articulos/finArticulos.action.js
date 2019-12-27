import { ARTICULO_FIND  } from './const';

import { findService } from '../../../services/articulo.services';

const findActionCreator = (data) =>  ({
    type: ARTICULO_FIND,
    payload: data
});

export const findActionsAsyncCreator = (id) => {
    return (dispatch, getStore) => {
        console.log(id);
        debugger
        findService(id).then(data => {
            console.log(data.data);
            debugger
            dispatch(findActionCreator(data.data));
        
        }).catch(err => {
            console.log(err);
        })
    }
}