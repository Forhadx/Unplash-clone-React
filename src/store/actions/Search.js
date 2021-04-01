import * as actionsTypes from "./actionTypes";
import uAxios from "../API/unplashApi";

export const searchPhotosSuccess = (data) => {
  return {
    type: actionsTypes.SEARCH_PHOTOS,
    data: data,
  };
};

export const searchPhotos = (val) => {
  return (dispatch) => {
    uAxios
        .get('/search/photos?page=1&query=' + val)
        .then((res) => {
            //console.log('search p: ',res.data.results);
            let fetchData = [...res.data.results]
            dispatch(searchPhotosSuccess(fetchData))
        });
  };
};

export const searchUserSuccess = (data) => {
  return {
    type: actionsTypes.SEARCH_USER,
    data: data,
  };
};

export const searchUser = (val) => {
  return (dispatch) => {
    uAxios
        .get('/search/users?page=1&query=' + val)
        .then((res) => {
           // console.log('search u: ',res.data.results);
            let fetchData = [...res.data.results]
            dispatch(searchUserSuccess(fetchData))
        });
  };
};

export const searchCollectionsSuccess = (data) => {
  return {
    type: actionsTypes.SEARCH_COLLECTIONS,
    data: data,
  };
};

export const searchCollections = (val) => {
  return (dispatch) => {
    uAxios
        .get('/search/collections?page=1&query=' + val)
        .then((res) => {
            //console.log('search c: ',res.data.results);
            let fetchData = [...res.data.results]
            dispatch(searchCollectionsSuccess(fetchData))
        });
  };
};