import * as actionsTypes from "./actionTypes";
import uAxios from "../API/unplashApi";

export const fetchCollectionPhotosSuccess = (data) => {
  return {
    type: actionsTypes.FETCH_COLLECTION_PHOTOS,
    data: data,
  };
};

export const fetchCollectionPhotos = (id) => {
  return (dispatch) => {
    uAxios
        .get(`/collections/${id}/photos`)
        .then((res) => {
            console.log('collections: ',res.data);
            let fetchData = [...res.data]
            dispatch(fetchCollectionPhotosSuccess(fetchData))
        });
  };
};
