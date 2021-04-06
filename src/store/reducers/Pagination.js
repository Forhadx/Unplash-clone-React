import * as actionsTypes from '../actions/actionTypes';

const initialState = {
    photos: [],
    pLoading: false
}

const reducer  = ( state=initialState, action ) => {
    switch(action.type){
        case actionsTypes.FETCH_PAGINATION_PHOTO_START:
            return{
                ...state,
                pLoading: true
            }
        case actionsTypes.FETCH_PAGINATION_PHOTO:
            return{
                ...state,
                photos: action.data,
                pLoading: false
            }
        default:
            return state
    }
}

export default reducer;