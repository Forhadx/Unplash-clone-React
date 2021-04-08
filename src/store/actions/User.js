import * as actionsTypes from "./actionTypes";
import uAxios from "../API/unplashApi";

export const userProfileSuccess = (data) => {
  return {
    type: actionsTypes.USER_PROFILE,
    data: data,
  };
};

export const userProfile = (userName) => {
  return (dispatch) => {
    uAxios
      .get("/users/" + userName)
      .then((res) => {
        dispatch(userProfileSuccess(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};


export const userPhotosSuccess = (data) => {
  return {
    type: actionsTypes.USER_PHOTOS,
    data: data,
  };
};

export const userPhotos = (userName) => {
  return (dispatch) => {
    uAxios
      .get(`/users/${userName}/photos`)
      .then((res) => {
        let fetchData = [...res.data]
          dispatch(userPhotosSuccess(fetchData))
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const userLikedPhotosSuccess = (data) => {
  return {
    type: actionsTypes.USER_LIKED_PHOTOS,
    data: data,
  };
};

export const userLikedPhotos = (userName) => {
  return (dispatch) => {
    uAxios
      .get(`/users/${userName}/likes`)
      .then((res) => {
        let fetchData = [...res.data]
          dispatch(userLikedPhotosSuccess(fetchData))
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const userCollectionsSuccess = (data) => {
  return {
    type: actionsTypes.USER_COLLECTION,
    data: data,
  };
};

export const userCollections = (userName) => {
  console.log('user: ',userName)
  return (dispatch) => {
    uAxios
      .get(`/users/${userName}/collections`)
      .then((res) => {
        let fetchData = [...res.data]
          dispatch(userCollectionsSuccess(fetchData))
      })
      .catch((err) => {
        console.log(err);
      });
  };
};