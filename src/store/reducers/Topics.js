import * as actionsTypes from "../actions/actionTypes";

const initialState = {
  topics: [],
  singleTopic: null,
  singleTopicPhotos: [],
  atloading: false,
  stpLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.FETCH_ALL_TOPICS_START:
      return {
        ...state,
        atloading: true,
      };
    case actionsTypes.FETCH_ALL_TOPICS:
      return {
        ...state,
        topics: action.data,
        atloading: false,
      };
    case actionsTypes.FETCH_SINGLE_TOPICS:
      return {
        ...state,
        singleTopic: {
          title: action.data.title,
          description: action.data.description,
        },
      };
    case actionsTypes.FETCH_SINGLE_TOPICS_PHOTOS_START:
      return {
        ...state,
        stpLoading: true,
      };
    case actionsTypes.FETCH_SINGLE_TOPICS_PHOTOS:
      return {
        ...state,
        singleTopicPhotos: action.data,
        stpLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
