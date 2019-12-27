import { ARTICULO_UPDATE  } from './const';

import { updateService } from '../../../services/articulo.services';

const updateActionCreator = (data) =>  ({
    type: ARTICULO_UPDATE,
    payload: data
});


export const updateActionsAsyncCreator = (data,id) => {
    return (dispatch, getStore) => {
        console.log("Aqui esta la data: "+ data, "aqui esta el id: " +id);
        
        updateService(data,id).then(data => {
            
            dispatch(updateActionCreator(data.data));
        
        }).catch(err => {
            console.log(err);
        })
    }
}