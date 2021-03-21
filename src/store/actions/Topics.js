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
