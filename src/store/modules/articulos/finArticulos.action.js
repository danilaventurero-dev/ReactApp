import { ARTICULO_FIND_SOLICITUD, ARTICULO_FIND_EJECUCION, ARTICULO_FIND_RESPONSE,ARTICULO_FIND_ERROR,ARTICULO_FIND_VOID  } from './const';

import { findService } from '../../../services/articulo.services';

const solicitudPostFindActionCreator = () =>  ({
    type: ARTICULO_FIND_SOLICITUD,
    payload: true
});

const findPostActionCreator = (data) =>  ({
    type: ARTICULO_FIND_EJECUCION,
    payload: data
});

const responsePostActionCreator = () =>  ({
    type: ARTICULO_FIND_RESPONSE,
    payload: true
});

const errorPostFindActionCreator = (data) =>  ({
    type: ARTICULO_FIND_ERROR,
    payload:data
});

const voidPostFindActionCreator = () =>  ({
    type: ARTICULO_FIND_VOID,
    payload:false
});

export const findActionsAsyncCreator = (jwt,id) => {
    return (dispatch) => {
        
        dispatch(solicitudPostFindActionCreator());
        
            if (id) {
                
                findService(jwt,id).then(data => {
                    dispatch(findPostActionCreator(data.data));
                    dispatch(responsePostActionCreator());
                }).catch(err => {
                    dispatch(errorPostFindActionCreator(err));
                    dispatch(voidPostFindActionCreator());
                })
            }else{dispatch(voidPostFindActionCreator())}
    }
}