import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GrDownload } from "react-icons/gr";

import Modal from "../UI/Modal/Modal";

import classes from "./gallary.module.css";

const Gallary = (props) => {
  const [modalImage, setModalImage] = useState({
    id: "",
    alt_description: "",
    user: {
      name: "",
      username: "",
      profile_image: {
        large: "",
      },
    },
    urls: {
      regular: "",
    },
  });

  const [clk, setClk] = useState(false);

  const imageClickHandler = (p) => {
    setModalImage({
      id: p.id,
      alt_description: p.alt_description,
      user: {
        name: p.user.name,
        username: p.user.username,
        profile_image: {
          large: p.user.profile_image.large,
        },
      },
      urls: {
        regular: p.urls.regular,
      },
    });
    document.body.style.overflow = "hidden";
    setClk(true);
  };
  console.log("pp: ", modalImage);

  const modalClosedHandler = () => {
    setModalImage({
      id: "",
      alt_description: "",
      user: {
        name: "",
        username: "",
        profile_image: {
          large: "",
        },
      },
      urls: {
        regular: "",
      },
    });
    setClk(false);
  };

  return (
    <div className={classes.imgGallary}>
      <Modal show={clk} modalClosed={modalClosedHandler}>
        <div className={classes.modalImgDetails}>
          <div className={classes.modalUserDetails}>
            <Link
              to={"/@" + modalImage.user.username}
              className={classes.userInfo}
            >
              <img
                src={modalImage.user.profile_image.large}
                alt={modalImage.user.name}
                className={classes.userImg}
              />
              <div className={classes.userNames}>
                <h4>{modalImage.user.username}</h4>
                <p className={classes.userName}>{modalImage.user.name}</p>
              </div>
            </Link>
            <div className={classes.down}>
              <GrDownload />
            </div>
          </div>
          <img
            className={classes.modalImg}
            src={modalImage.urls.regular}
            alt={modalImage.alt_description}
          />
        </div>
      </Modal>
      {props.photos.map((p) => (
        <div key={p.id} className={classes.pictureCard}>
          <img
            onClick={() => imageClickHandler({ ...p })}
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
