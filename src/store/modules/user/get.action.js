import { USER_GET  } from './const';

import { getService } from '../../../services/user.services';

const getActionCreator = (data) =>  ({
    type: USER_GET,
    payload: data
});

export const getActionsAsyncCreator = (jwt) => {
    return (dispatch, getStore) => {

        getService(jwt).then(data => {
            dispatch(getActionCreator(data.data));
        
        }).catch(err => {
            console.log(err);
        })
    }
}