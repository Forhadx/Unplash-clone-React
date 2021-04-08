import * as actionsTypes from "./actionTypes";
import uAxios from "../API/unplashApi";


export const fetchPaginationPhotosInit = () => {
  return {
    type: actionsTypes.FETCH_PAGINATION_PHOTO_START
  };
};

export const fetchPaginationPhotosSuccess = (data) => {
  return {
    type: actionsTypes.FETCH_PAGINATION_PHOTO,
    data: data,
  };
};

export const fetchPaginationPhotos = (val) => {
  return (dispatch) => {
    dispatch(fetchPaginationPhotosInit());
    uAxios
        .get("/photos?page=" + val)
        .then((res) => {
            let fetchData = [...res.data]
            dispatch(fetchPaginationPhotosSuccess(fetchData))
        })
        .catch(err =>{
          console.log(err);
        })
  };
};
