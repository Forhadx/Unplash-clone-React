import React, {useEffect} from "react";
import { connect } from 'react-redux'
import {
  NavLink,
  Route,
  Switch,
  useParams,
  withRouter,
} from "react-router-dom";
import * as actions from '../store/actions/index';

import Gallary from '../components/gallary/gallary';
import A from "./A";
import B from "./B";
import C from "./C";

const Search = (props) => {
  let { sName } = useParams();
  console.log(sName);
  console.log('p: ',props.sPhotos);

  const { onSearchPhotos, onSearchUser, onSearchCollections } = props;

  useEffect(()=>{
    onSearchPhotos(sName);
    onSearchUser(sName);
    onSearchCollections(sName);
  }, [onSearchPhotos, onSearchUser, onSearchCollections, sName])

  return (
    <div>
      <div>
        <NavLink to={`/s/photos/${sName}`}>Photos</NavLink>
        <NavLink to={`/s/collections/${sName}`}>Collections</NavLink>
        <NavLink to={`/s/Users/${sName}`}>Users</NavLink>
      </div>
      <div>
        <h2>{sName}</h2>
        <Switch>
          <Route path={`/s/photos/${sName}`} exact render={() => <Gallary photos={props.sPhotos} />} />
          <Route path={`/s/collections/${sName}`} exact render={() => <B />} />
          <Route path={`/s/Users/${sName}`} exact render={() => <C />} />
        </Switch>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    sPhotos: state.search.sPhotos ,
    sUsers: state.search.sPhotos,
    sCollections: state.search.sPhotos
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchPhotos: (val) => dispatch(actions.searchPhotos(val)),
    onSearchUser: (val) => dispatch(actions.searchUser(val)),
    onSearchCollections: (val) => dispatch(actions.searchCollections(val))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
