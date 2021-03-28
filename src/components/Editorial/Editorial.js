import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";
import * as actions from '../../store/actions/index';

import './Editorial.css';


const Editorial = props => {
  const { onFetchAllTopics } = props;
  useEffect(()=>{
    onFetchAllTopics();
  }, [onFetchAllTopics])

 // console.log('val: ', props.topics)

  return (
    <nav>
      <ul className="editorial-nav">
        <li className="editorial">Editorial</li>
        <ul className="editorial-items">
          {
            props.topics.map(t =>(
              <li key={t.id} ><NavLink to={`/t/${t.slug}`}> {t.title} </NavLink></li>
            ))
          }
        </ul>
        <li className="view-all"><NavLink to='/t'>view all</NavLink></li>
      </ul>
    </nav>
  );
};


const mapStateToProps = (state) => {
  return {
    topics: state.topics.topics
  };
};

const mapDispatchToProps = dispatch =>{
  return{
    onFetchAllTopics: () => dispatch(actions.fetchAllTopics())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Editorial);
