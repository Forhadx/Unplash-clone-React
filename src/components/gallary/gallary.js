import React from "react";
import { Link } from "react-router-dom";
import classes from "./gallary.module.css";

const Gallary = (props) => {
  return (
    <div className={classes.imgGallary}>
      {props.photos.map((p) => (
        <div key={p.id} className={classes.pictureCard}>
          <img
            src={p.urls.regular}
            alt={p.alt_description}
            className={classes.picture}
          />
          <div className={classes.userDetails}>
            <Link to={"/@" + p.user.username} className={classes.user}>
              <img
                src={p.user.profile_image.large}
                alt={p.user.name}
                className={classes.userImg}
              />
              <p className={classes.userName}>{p.user.name}</p>
            </Link>
            <div className={classes.down}>Down</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallary;
