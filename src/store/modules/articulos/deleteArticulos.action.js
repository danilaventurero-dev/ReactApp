import { ARTICULO_DELETE } from "./const"

import { deleteService, getService as getAll } from '../../../services/articulo.services';

const deleteActionCreator = (data) =>  ({
    type: ARTICULO_DELETE,
    payload: data
});

export const deleteActionsAsyncCreator = (id) => {
    return (dispatch, getStore) => {

        deleteService( id).then(data => {
            dispatch(deleteActionCreator(data.data));
            dispatch(getAll());
        }).catch(err => {
            //dispatch((err));
        })
    }
}