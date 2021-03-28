import React, { useEffect } from "react";
import * as actions from "../store/actions/index";
import { connect } from "react-redux";
import { NavLink, Route, Switch } from "react-router-dom";

import Gallary from '../components/gallary/gallary';
import A from '../containers/A';

const User = (props) => {
  //console.log(props.match.params.user.slice(1));
  console.log(props.location.pathname)

  const userParam = props.match.params.user.slice(1);
  const { onUserProfile, onUserPhotos } = props;

  useEffect(() => {
    onUserProfile(userParam);
    onUserPhotos(userParam);
  }, [userParam, onUserProfile, onUserPhotos]);

  //console.log(props.uPhotos);
  
  return (
    <div>
      {props.uProfile ? (
        <div>
          <img src={props.uProfile.image} alt={props.uProfile.name} />
          <h3>{props.uProfile.name}</h3>
          <p>{props.uProfile.bio}</p>
        </div>
      ) : null}
      <div>
        <div>
          <NavLink to={props.location.pathname}>Photos</NavLink>
          <NavLink to={`/@${userParam}/likes`}>Likes</NavLink>
          <NavLink to="/a">Collections</NavLink>
        </div>
        <div>
          <Switch>
            <Route path={props.location.pathname} render = { () => <Gallary photos={props.uPhotos} /> } />
            <Route path="/:user/likes"  render = { () => <Gallary photos={props.uLikesPhotos} /> }  />
            <Route path="/a" exact component={A} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    uProfile: state.user.uProfile,
    uPhotos: state.user.uPhotos,
    uLikesPhotos: state.user.uLikesPhotos
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUserProfile: (userName) => dispatch(actions.userProfile(userName)),
    onUserPhotos: (userName) => dispatch(actions.userPhotos(userName)),
    onUserLikedPhotos: (userName) => dispatch(actions.userLikedPhotos(userName))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
