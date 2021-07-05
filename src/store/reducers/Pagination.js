import * as actionsTypes from '../actions/actionTypes';

const initialState = {
    photos: [],
    pLoading: false,
    pageNum: 1
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
                photos: state.photos.concat(...action.data),
                pLoading: false,
                pageNum : state.pageNum + 1
            }
        default:
            return state
    }
}

export default reducer;