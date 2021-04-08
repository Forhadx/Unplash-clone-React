import React, { useEffect } from "react";
import * as actions from "../store/actions/index";
import { connect } from "react-redux";
import { NavLink, Route, Switch, useParams } from "react-router-dom";

import Gallary from "../components/gallary/gallary";
import UserCollections from "../components/Collection/Collection";

import './style.css';

const User = React.memo(props => {
  let { user } = useParams();
  const userParam = user.slice(1);

  const {
    onUserProfile,
    onUserPhotos,
    onUserLikedPhotos,
    onUserCollections,
  } = props;

  useEffect(() => {
    onUserProfile(userParam);
    onUserPhotos(userParam);
    onUserLikedPhotos(userParam);
    onUserCollections(userParam);
  }, [
    userParam,
    onUserProfile,
    onUserPhotos,
    onUserCollections,
    onUserLikedPhotos,
  ]);

  return (
    <div>
      {props.uProfile ? (
        <div className="user">
          <img src={props.uProfile.image} alt={props.uProfile.name} />
          <div className="user-details">
            <h3>{props.uProfile.name}</h3>
            <p>{props.uProfile.bio}</p>
          </div>
        </div>
      ) : null}
      <div>
        <ul className="user-links">
          <li><NavLink exact to={"/" + user}>Photos</NavLink></li>
          <li><NavLink to={`/${user}/likes`}>Likes</NavLink></li>
          <li><NavLink to={`/${user}/collection`}>Collections</NavLink></li>
        </ul>
       
        <div>
          <Switch>
            <Route
              path={`/${user}/likes`}
              exact
              render={() => <Gallary photos={props.uLikesPhotos} />}
            />
            <Route
              path={`/${user}/collection`}
              exact
              render={() => <UserCollections  collections={props.uCollections} />}
            />
            <Route
              path={"/" + user}
              exact
              render={() => <Gallary photos={props.uPhotos} />}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
});

const mapStateToProps = (state) => {
  return {
    uProfile: state.user.uProfile,
    uPhotos: state.user.uPhotos,
    uLikesPhotos: state.user.uLikesPhotos,
    uCollections: state.user.uCollections,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUserProfile: (userName) => dispatch(actions.userProfile(userName)),
    onUserPhotos: (userName) => dispatch(actions.userPhotos(userName)),
    onUserLikedPhotos: (userName) =>
      dispatch(actions.userLikedPhotos(userName)),
    onUserCollections: (username) =>
      dispatch(actions.userCollections(username)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
