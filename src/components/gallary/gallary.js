import React from "react";
import { Link } from "react-router-dom";
import { GrDownload } from "react-icons/gr";

import Modal from "../UI/Modal/Modal";

import classes from "./gallary.module.css";

const Gallary = (props) => {
  console.log(props.photos);
  return (
    <div className={classes.imgGallary}>
      <Modal show={true} modalClosed={false}>
        <div className={classes.modalImgDetails}>
          <div className={classes.modalUserDetails}>
            <div>
              hi
            </div>
            <div>down</div>
          </div>
          <img className={classes.modalImg} src="https://images.unsplash.com/photo-1617679121474-7dbad809be90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" />
        </div>
      </Modal>
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
            <div className={classes.down}>
              <GrDownload />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallary;
