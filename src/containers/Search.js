import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  NavLink,
  Route,
  Switch,
  useParams,
  withRouter,
} from "react-router-dom";
import * as actions from "../store/actions/index";

import Gallary from "../components/gallary/gallary";
import Collections from "../components/Collection/Collection";
import Users from "../components/Users/Users";
import "./style.css";

const Search = React.memo((props) => {
  let { sName } = useParams();

  const { onSearchPhotos, onSearchUser, onSearchCollections } = props;

  useEffect(() => {
    onSearchPhotos(sName);
    onSearchUser(sName);
    onSearchCollections(sName);
  }, [onSearchPhotos, onSearchUser, onSearchCollections, sName]);

  return (
    <div>
      <ul className="user-links">
        <li>
          <NavLink to={`/s/photos/${sName}`}>Photos</NavLink>
        </li>
        <li>
          <NavLink to={`/s/collections/${sName}`}>Collections</NavLink>
        </li>
        <li>
          <NavLink to={`/s/Users/${sName}`}>Users</NavLink>
        </li>
      </ul>
      <div>
        <h1 className="search-name">{sName}</h1>
        <Switch>
          <Route
            path={`/s/photos/${sName}`}
            exact
            render={() => <Gallary photos={props.sPhotos} />}
          />
          <Route
            path={`/s/collections/${sName}`}
            exact
            render={() => <Collections collections={props.sCollections} />}
          />
          <Route
            path={`/s/Users/${sName}`}
            exact
            render={() => <Users users={props.sUsers} />}
          />
        </Switch>
      </div>
    </div>
  );
});

const mapStateToProps = (state) => {
  return {
    sPhotos: state.search.sPhotos,
    sUsers: state.search.sPhotos,
    sCollections: state.search.sCollections,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchPhotos: (val) => dispatch(actions.searchPhotos(val)),
    onSearchUser: (val) => dispatch(actions.searchUser(val)),
    onSearchCollections: (val) => dispatch(actions.searchCollections(val)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
