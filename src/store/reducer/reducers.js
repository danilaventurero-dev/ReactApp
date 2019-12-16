import {USER_LIST} from '../const';

const initialState = {
    users:[]
}

const Reducer = (prevState = initialState, action) => {
    switch(action.type){
        case USER_LIST:
            return {
                ...prevState,
            }
        default:
            return prevState;
    }
}

export default Reducer;