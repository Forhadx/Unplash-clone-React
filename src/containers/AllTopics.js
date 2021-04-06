import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../store/actions/index";

import Spinner from '../components/UI/Spinner/Spinner';

import "./style.css";

const AllTopics = (props) => {
  const { onFetchAllTopics } = props;
  useEffect(() => {
    onFetchAllTopics();
  }, [onFetchAllTopics]);

  // console.log("view: ", props.topics);

  const topicList = (
    <ul>
      {props.topics.map((t) => (
        <li key={t.id} className="single-topic">
          <Link to={`/t/${t.slug}`}>
            <img
              src={t.cover_photo.urls.regular}
              alt={t.cover_photo.description}
              style={{ width: "100%" }}
            />
            <h4>{t.title}</h4>
            <p>{t.description.slice(0, 80)}...</p>
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="all-topics">
      <div className="topic-head">
        <h1>Topics</h1>
        <span>
          Explore the world through topics of beautiful photos free to use under
          the
        </span>
      </div>
      <div className="all-topics-details">
        <h2>All topics</h2>
        { props.atloading ? <Spinner /> : topicList}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    topics: state.topics.topics,
    atloading: state.topics.atloading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchAllTopics: () => dispatch(actions.fetchAllTopics()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllTopics);
