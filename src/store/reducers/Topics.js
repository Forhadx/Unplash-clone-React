import * as actionsTypes from '../actions/actionTypes';

const initialState = {
    topics: [],
    singleTopic: null,
    singleTopicPhotos: []
}

const reducer  = ( state=initialState, action ) => {
    switch(action.type){
        case actionsTypes.FETCH_ALL_TOPICS:
            return{
                ...state,
                topics: action.data
            }
        case actionsTypes.FETCH_SINGLE_TOPICS:
            return{
                ...state,
                singleTopic: {
                    title: action.data.title,
                    description: action.data.description
                } 
            }
        case actionsTypes.FETCH_SINGLE_TOPICS_PHOTOS:
            return{
                ...state,
                singleTopicPhotos: action.data
            }
        default:
            return state
    }
}

export default reducer;