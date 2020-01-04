import { ARTICULO_UPDATE_SOLICITUD,ARTICULO_UPDATE_EJECUCION, ARTICULO_UPDATE_SUCCESS, ARTICULO_UPDATE_ERROR  } from './const';

import {findActionsAsyncCreator as findArticulos} from './finArticulos.action';

import { updateService } from '../../../services/articulo.services';

const updateSolicitudActionCreator = () =>  ({
    type: ARTICULO_UPDATE_SOLICITUD,
    payload: true
});

const updateActionCreator = (data) =>  ({
    type: ARTICULO_UPDATE_EJECUCION,
    payload: data
});

const updateSuccessActionCreator = () =>  ({
    type: ARTICULO_UPDATE_SUCCESS,
    payload: true
});

const updateErrorActionCreator = () =>  ({
    type: ARTICULO_UPDATE_ERROR,
    payload: 'error'
});


export const updateActionsAsyncCreator = (jwt,data,id) => {
    return (dispatch) => {
        dispatch(updateSolicitudActionCreator());

        updateService(jwt,data,id).then(data => {
            
            dispatch(updateActionCreator(data.data));
            dispatch(updateSuccessActionCreator());
            dispatch(findArticulos());
        }).catch(err => {
            debugger
            dispatch(updateErrorActionCreator());
            
            dispatch(findArticulos());
        })
    }
}