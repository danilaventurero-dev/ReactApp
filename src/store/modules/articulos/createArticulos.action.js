import {
     ARTICULO_CREATE_SOLICITUD
    ,ARTICULO_CREATE_EJECUCION
    ,ARTICULO_ERROR
    ,ARTICULO_CREATE_RESPONSE
    ,ARTICULO_VOID
} from './const';
import { saveService } from '../../../services/articulo.services';

const solicitudCreateActionCreator = () => ({
    type: ARTICULO_CREATE_SOLICITUD,
    payload: true
})

const ejecucionCreateActionCreator = () => ({
    type: ARTICULO_CREATE_EJECUCION,
    payload: null
})

const responseCreateActionCreator = () => ({
    type: ARTICULO_CREATE_RESPONSE,
    payload: true
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
        
        dispatch(solicitudCreateActionCreator())
        
        saveService(data).then(data => {
            
            dispatch(ejecucionCreateActionCreator());
            
            if (data.message === 'success') {
                
                dispatch(responseCreateActionCreator(data.message));
                dispatch(voidCreateActionCreator());
                
            }else{
                dispatch(errorCreateActionCreator(data.message))
            }
        }).catch(err => {
            
            dispatch(errorCreateActionCreator(err));
        })
    }
}