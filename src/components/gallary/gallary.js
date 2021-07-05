import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GrDownload } from "react-icons/gr";

import axios from "axios";
import download from "downloadjs";

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

  const downloadHandler = (p) => {
    axios
      .get(p.urls.regular, { responseType: "blob" })
      .then((result) => {
        return download(result.data, p.id, "image/*");
      })
      .catch((err) => console.log(err));
  };

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
    document.body.style.overflow = "auto";
    setClk(false);
  };

  return (
    <div className={classes.imgGallary}>
      <Modal show={clk} modalClosed={modalClosedHandler}>
        <div className={classes.modalImgDetails}>
          <div className={classes.modalUserDetails}>
            <Link
              to={"/@" + modalImage.user.username + "/photos"}
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
            <div
              className={classes.down}
              onClick={() => downloadHandler(modalImage)}
            >
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
      {props.photos.map((p, i) => (
        <div key={p.id + i} className={classes.pictureCard}>
          <img
            style={{ height: `${p.height / 180}rem` }}
            onClick={() => imageClickHandler({ ...p })}
            src={p.urls.regular}
            alt={p.alt_description}
            className={classes.picture}
          />
          <div className={classes.userDetails}>
            <Link
              to={"/@" + p.user.username + "/photos"}
              className={classes.user}
            >
              <img
                src={p.user.profile_image.large}
                alt={p.user.name}
                className={classes.userImg}
              />
              <p className={classes.userName}>{p.user.name}</p>
            </Link>
            <div className={classes.down} onClick={() => downloadHandler(p)}>
              <GrDownload />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallary;
