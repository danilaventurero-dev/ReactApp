import {ARTICULO_CREATE,ARTICULO_CLEAR} from './const';
import { saveService } from '../../../services/articulo.services';

const articuloCreateActionCreator = (data) => ({
    type: ARTICULO_CREATE,
    payload: data
})

const clearActionCreator = () => ({
    type: ARTICULO_CLEAR,
    payload: null
})

export const createActionsAsyncCreator = (data) => {
    return (dispatch) => {
        
        saveService(data).then(data => {
            dispatch(articuloCreateActionCreator(data.message));
            if (data.message === 'success') {
                dispatch(clearActionCreator());
            }
        }).catch(err => {
            //dispatch(errorActionCreator(err));
        })
    }
}