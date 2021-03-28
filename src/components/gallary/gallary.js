import React from "react";
import { Link } from "react-router-dom";
import "./gallary.css";

const Gallary = (props) => {

  return (
    <div className="img-gallary">
      {props.photos.map((p) => (
        <div key={p.id} style={{ border: "1px solid green" }}>
          <img src={p.urls.regular} alt={p.alt_description} />
          <div>
            <Link to={"/@" + p.user.username}>
              <h3>{p.user.username}</h3>{" "}
            </Link>
            <img
              src={p.user.profile_image.small}
              alt={p.user.username}
              style={{ width: "5rem" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallary;
