import * as actionsTypes from '../actions/actionTypes';

const initialState = {
    sPhotos: [],
    sUsers: [],
    sCollections: []
}

const reducer  = ( state=initialState, action ) => {
    switch(action.type){
        case actionsTypes.SEARCH_PHOTOS:
            return{
                ...state,
                sPhotos: action.data
            }
        case actionsTypes.SEARCH_USER:
            return{
                ...state,
                sUsers: action.data
            }
        case actionsTypes.SEARCH_COLLECTIONS:
            return{
                ...state,
                sCollections: action.data
            }
        default:
            return state
    }
}

export default reducer;