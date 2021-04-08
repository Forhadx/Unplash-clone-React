import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import * as actions from "../../store/actions/index";

import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

import "./Editorial.css";

const Editorial = React.memo(props => {
  const [slide, setSlide] = useState(0);

  const menu = useRef(0);

  const { onFetchAllTopics } = props;

  useEffect(() => {
    onFetchAllTopics();
  }, [onFetchAllTopics]);

  const rightHandler = () => {
    if (menu.current.childNodes.length > 1) setSlide(slide + 1);
  };
  const leftHandler = () => {
    if (slide > 0) setSlide(slide - 1);
  };

  return (
    <nav>
      <div className="editorial-nav">
        <span className="editorial">
          <NavLink exact to="/">
            Editorial
          </NavLink>
        </span>
        <span className="editorial-border">|</span>
        <button onClick={leftHandler} className="sign-btn">
          <AiOutlineLeft size="1.5rem" />
        </button>
        <ul ref={menu} className="editorial-items">
          {props.topics.map((t, i) => {
            if (i >= slide) {
              return (
                <li key={t.id}>
                  <NavLink exact to={`/t/${t.slug}`}>
                    {t.title}
                  </NavLink>
                </li>
              )
            }
          })}
        </ul>
        <button onClick={rightHandler} className="sign-btn">
          <AiOutlineRight size="1.5rem" />
        </button>
        <span className="view-all">
          <NavLink exact to="/t">
            view all
          </NavLink>
        </span>
      </div>
    </nav>
  );
});

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

export default connect(mapStateToProps, mapDispatchToProps)(Editorial);
