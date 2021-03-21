import * as actionsTypes from '../actions/actionTypes';

const initialState = {
    photos: []
}

const reducer  = ( state=initialState, action ) => {
    switch(action.type){
        case actionsTypes.FETCH_PAGINATION_PHOTO:
            return{
                ...state,
                photos: action.data
            }
        default:
            return state
    }
}

export default reducer;