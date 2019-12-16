import {USER_LIST} from '../const';

export const getAllActionsAsyncCreator = () => {
    return (dispatch, getStore) => {
        dispatch(userList()); 
    }
}