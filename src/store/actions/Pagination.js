import * as actionsTypes from "./actionTypes";
import uAxios from "../API/unplashApi";

export const fetchPaginationPhotosSuccess = (data) => {
  return {
    type: actionsTypes.FETCH_PAGINATION_PHOTO,
    data: data,
  };
};

export const fetchPaginationPhotos = (val) => {
  return (dispatch) => {
    uAxios
        .get("/photos?page=" + val)
        .then((res) => {
            //console.log(res.data);
            let fetchData = [...res.data]
            dispatch(fetchPaginationPhotosSuccess(fetchData))
        });
  };
};
