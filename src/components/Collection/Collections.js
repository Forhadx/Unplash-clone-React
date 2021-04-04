import React from "react";
import { Link } from "react-router-dom";
import "./Collections.css";

const Collections = (props) => {
  console.log("col: ", props.collections);
  return (
    <div className="collections">
      {props.collections.map((c) => (
        <Link to={'/collections/'+c.id} key={c.id} className="collection-details">
          <img src={c.urls.regular} />
          <h3>{c.title}</h3>
          <div className="tags">
            {c.tags.map((t) => (
              <span key={t.id} className="tag-name">
                {t.title}
              </span>
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Collections;

// props.collections
