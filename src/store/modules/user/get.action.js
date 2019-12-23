import { USER_GET  } from './const';

import { getService } from '../../../services/user.services';

const getActionCreator = (data) =>  ({
    type: USER_GET,
    payload: data
});

export const getActionsAsyncCreator = () => {
    return (dispatch, getStore) => {

        getService().then(data => {
            dispatch(getActionCreator(data.data));
        
        }).catch(err => {
            console.log(err);
        })
    }
}