import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";

import Gallary from '../components/gallary/gallary';

const Topic = (props) => {

 // console.log(props.match.params.slug);

  let slug_name = props.match.params.slug;
  const { onFetchSingleTopics,onFetchSingleTopicsPhotos } = props;

  useEffect(() => {
    onFetchSingleTopics(slug_name);
    onFetchSingleTopicsPhotos(slug_name);
  }, [onFetchSingleTopics, onFetchSingleTopicsPhotos, slug_name]);

  //console.log("single: ", props.singleTopicPhotos);
  return (
    <div>
      {props.singleTopic ? (
        <div>
          <h1>{props.singleTopic.title}</h1>
          <p>{props.singleTopic.description}</p>
        </div>
      ) : null}
      <Gallary photos={props.singleTopicPhotos} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    singleTopic: state.topics.singleTopic,
    singleTopicPhotos: state.topics.singleTopicPhotos
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchSingleTopics: (slug) => dispatch(actions.fetchSingleTopics(slug)),
    onFetchSingleTopicsPhotos: (slug) => dispatch(actions.fetchSingleTopicsPhotos(slug)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Topic);
