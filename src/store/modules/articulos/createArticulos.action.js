import {
     ARTICULO_SOLICITUD
    ,ARTICULO_CREATE
    ,ARTICULO_ERROR
    ,ARTICULO_RESPONSE
    ,ARTICULO_VOID
} from './const';
import { saveService } from '../../../services/articulo.services';

const solicitudCreateActionCreator = (data) => ({
    type: ARTICULO_SOLICITUD,
    payload: data
})

const ejecucionCreateActionCreator = () => ({
    type: ARTICULO_CREATE,
    payload: null
})

const responseCreateActionCreator = () => ({
    type: ARTICULO_RESPONSE,
    payload: null
})

const voidCreateActionCreator = () => ({
    type: ARTICULO_VOID,
    payload: false
})

const errorCreateActionCreator = (err) => ({
    type: ARTICULO_ERROR,
    payload: err
})

export const createActionsAsyncCreator = (data) => {
    return (dispatch) => {
        dispatch(solicitudCreateActionCreator(data))
        debugger
        saveService(data).then(data => {

            dispatch(ejecucionCreateActionCreator(data.message));
            
            if (data.message === 'success') {
                dispatch(responseCreateActionCreator());
                dispatch(voidCreateActionCreator());
                
            }
        }).catch(err => {
            debugger
            dispatch(errorCreateActionCreator(err));
        })
    }
}