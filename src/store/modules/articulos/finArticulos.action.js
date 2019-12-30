import { ARTICULO_SOLICITUD, ARTICULO_FIND, ARTICULO_RESPONSE  } from './const';

import { findService } from '../../../services/articulo.services';

const solicitudPostFindActionCreator = () =>  ({
    type: ARTICULO_SOLICITUD,
    payload: true
});

const findPostActionCreator = (data) =>  ({
    type: ARTICULO_FIND,
    payload: data
});

const responsePostActionCreator = () =>  ({
    type: ARTICULO_RESPONSE,
    payload: true
});

export const findActionsAsyncCreator = (id) => {
    return (dispatch) => {
        dispatch(solicitudPostFindActionCreator());
        debugger
            findService(id).then(data => {
                debugger
                dispatch(findPostActionCreator(data.data));
            }).catch(err => {
                console.log(err);
            })
        dispatch(responsePostActionCreator()); 
    }
}