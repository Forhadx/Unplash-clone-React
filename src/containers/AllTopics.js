import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../store/actions/index";

const AllTopics = (props) => {
  const { onFetchAllTopics } = props;
  useEffect(() => {
    onFetchAllTopics();
  }, [onFetchAllTopics]);

  console.log("view: ", props.topics);

  return (
    <div>
      <div>
        <h1>Topics</h1>
        <p>
          Explore the world through topics of beautiful photos free to use under
          the
        </p>
      </div>
      <div>
        <h2>All topics</h2>
        <ul>
          {props.topics.map((t) => (
            <li key={t.id} style={{ border: "1px solid red", width: "50%" }}>
              <Link to={`/t/${t.slug}`}>
                <img
                  src={t.cover_photo.urls.regular}
                  alt={t.cover_photo.description}
                  style={{ width: "100%" }}
                />
                <p>{t.status}</p>
                <div>{t.title}</div>
                <div>{t.description}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    topics: state.topics.topics,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchAllTopics: () => dispatch(actions.fetchAllTopics()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllTopics);
