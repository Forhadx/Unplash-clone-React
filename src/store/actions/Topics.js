import * as actionsTypes from "./actionTypes";
import uAxios from "../API/unplashApi";

export const fetchAllTopicsSuccess = (data) => {
  return {
    type: actionsTypes.FETCH_ALL_TOPICS,
    data: data,
  };
};

export const fetchAllTopics = () => {
  return (dispatch) => {
    uAxios
        .get("/topics")
        .then((res) => {
            //console.log(res.data);
            let fetchData = [...res.data]
            dispatch(fetchAllTopicsSuccess(fetchData))
        });
  };
};


export const fetchSingleTopicsSuccess = (data) => {
  return {
    type: actionsTypes.FETCH_SINGLE_TOPICS,
    data: data,
  };
};

export const fetchSingleTopics = (slug) => {
  return (dispatch) => {
    uAxios
        .get("/topics/" + slug)
        .then((res) => {
            //console.log(res.data);
            dispatch(fetchSingleTopicsSuccess(res.data))
        });
  };
};


export const fetchSingleTopicsPhotosSuccess = (data) => {
  return {
    type: actionsTypes.FETCH_SINGLE_TOPICS_PHOTOS,
    data: data,
  };
};

export const fetchSingleTopicsPhotos = (slug) => {
  return (dispatch) => {
    uAxios
        .get(`/topics/${slug}/photos`)
        .then((res) => {
            //console.log(res.data);
            let fetchData = [...res.data]
            dispatch(fetchSingleTopicsPhotosSuccess(fetchData))
        });
  };
};