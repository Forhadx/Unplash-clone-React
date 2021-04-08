import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import * as actions from "../../store/actions/index";

import Gallary from '../gallary/gallary';

const SingleCollection = React.memo(props => {
  const { id } = useParams();

  const { onFetchCollectionPhotos } = props;

  useEffect(() => {
    onFetchCollectionPhotos(id);
  }, [onFetchCollectionPhotos, id]);

  return (
    <Gallary photos={props.photos} />
  );
});

const mapStateToProps = (state) => {
  return {
    photos: state.collections.photos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchCollectionPhotos: (id) =>
      dispatch(actions.fetchCollectionPhotos(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleCollection);
