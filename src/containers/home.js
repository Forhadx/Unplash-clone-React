import React, { useEffect } from "react";
import * as actions from "../store/actions/index";

import Gallary from "../components/gallary/gallary";
import { connect } from "react-redux";

import './style.css';

const Home = React.memo((props) => {
  const { onFetchPaginationPhotos, pageNum } = props;
  useEffect(() => {
    onFetchPaginationPhotos(1);
  }, [onFetchPaginationPhotos]);


  const pageIncreaseHandler = () =>{
    onFetchPaginationPhotos(pageNum + 1);
  }

  return (
    <div>
      <div>
        <img
          className="cover-pic"
          src="https://images.unsplash.com/photo-1617191979724-f755c6d83e01?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
          alt="cover pic"
        />
      </div>

     <Gallary photos={props.photos} />
      <button onClick={pageIncreaseHandler} className="load">Load more</button>
    </div>
  );
});

const mapStateToProps = (state) => {
  return {
    photos: state.pagination.photos,
    pLoading: state.pagination.pLoading,
    pageNum: state.pagination.pageNum
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchPaginationPhotos: (val) => dispatch(actions.fetchPaginationPhotos(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
