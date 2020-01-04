import { ARTICULO_DELETE_EJECUCION,ARTICULO_DELETE_SOLICITUD,ARTICULO_DELETE_RESPONSE,ARTICULO_DELETE_VOID } from "./const"

import { deleteService, getService as getAll } from '../../../services/articulo.services';

const deleteSolicitudActionCreator = () =>  ({
    type: ARTICULO_DELETE_SOLICITUD,
    payload: true
});

const deleteEjecucionActionCreator = (data) =>  ({
    type: ARTICULO_DELETE_EJECUCION,
    payload: data
});

const deleteResponseActionCreator = (data) =>  ({
    type: ARTICULO_DELETE_RESPONSE,
    payload: data
});

const deleteVoidActionCreator = (data) =>  ({
    type: ARTICULO_DELETE_VOID,
    payload: false
});

export const deleteActionsAsyncCreator = (jwt,id) => {
    return (dispatch) => {
        dispatch(deleteSolicitudActionCreator())
        deleteService(jwt, id).then(data => {
            dispatch(deleteEjecucionActionCreator(data.data));
            dispatch(deleteResponseActionCreator());
            dispatch(deleteVoidActionCreator());
        }).catch(err => {
            //dispatch((err));
        })
    }
}