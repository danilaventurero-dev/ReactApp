import { ARTICULO_SOLICITUD, ARTICULO_GET, ARTICULO_RESPONSE,ARTICULO_GET_ERROR  } from './const';

import { getService } from '../../../services/articulo.services';
const solicitudActionCreator = () => ({
    type: ARTICULO_SOLICITUD,
    payload:true,
});

const getActionCreator = (data) =>  ({
    type: ARTICULO_GET,
    payload: data,
});

const responseActionCreator = () => ({
    type:ARTICULO_RESPONSE,
    payload:false
})

const getErrorActionCreator = (data) => ({
    type:ARTICULO_GET_ERROR,
    payload:data
})

export const getActionsAsyncCreator = () => {
    return (dispatch) => {
        dispatch(solicitudActionCreator());

        getService().then(data => {
            
            dispatch(getActionCreator(data.data));  

            dispatch(responseActionCreator());
        }).catch(err => {
            
            dispatch(getErrorActionCreator(err));
        })
    }
}