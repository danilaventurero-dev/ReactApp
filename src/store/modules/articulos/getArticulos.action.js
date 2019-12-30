import { ARTICULO_SOLICITUD, ARTICULO_GET, ARTICULO_RESPONSE  } from './const';

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

export const getActionsAsyncCreator = () => {
    return (dispatch) => {
        dispatch(solicitudActionCreator);

        getService().then(data => {
            debugger
            dispatch(getActionCreator(data.data));  
            dispatch(responseActionCreator);
        }).catch(err => {
            console.log(err);
        })
    }
}