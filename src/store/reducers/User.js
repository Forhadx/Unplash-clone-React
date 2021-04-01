import * as actionsTypes from '../actions/actionTypes';

const initialState = {
    uProfile: null,
    uPhotos: [],
    uLikesPhotos: [],
    uCollections: []
}

const reducer  = ( state=initialState, action ) => {
    switch(action.type){
        case actionsTypes.USER_PROFILE:
            return{
                ...state,
                uProfile: {
                    name: action.data.name,
                    bio: action.data.bio,
                    image: action.data.profile_image.medium
                }
            }
        case actionsTypes.USER_PHOTOS:
            return{
                ...state,
                uPhotos: action.data
            }
        case actionsTypes.USER_LIKED_PHOTOS:
            return{
                ...state,
                uLikesPhotos: action.data
            }
        case actionsTypes.USER_COLLECTION:
                return{
                    ...state,
                    uCollections: action.data
                }
        default:
            return state
    }
}

export default reducer;