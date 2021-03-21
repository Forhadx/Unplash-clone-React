import * as actionsTypes from '../actions/actionTypes';

const initialState = {
    topics: []
}

const reducer  = ( state=initialState, action ) => {
    switch(action.type){
        case actionsTypes.FETCH_ALL_TOPICS:
            return{
                ...state,
                topics: action.data
            }
        default:
            return state
    }
}

export default reducer;