import { ARTICULO_GET  } from './const';

import { getService } from '../../../services/articulo.services';

const getActionCreator = (data) =>  ({
    type: ARTICULO_GET,
    payload: data
});

export const getActionsAsyncCreator = () => {
    return (dispatch, getStore) => {

        getService().then(data => {
            dispatch(getActionCreator(data.data));
        
        }).catch(err => {
            console.log(err);
        })
    }
}