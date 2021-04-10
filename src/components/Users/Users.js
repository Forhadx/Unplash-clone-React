import React from "react";
import { Link } from "react-router-dom";
import './User.css';

const Users = (props) => {
  return (
    <div className="users">
      {props.users.map((u) => (
        <Link to={"/@" + u.username + "/photos"} key={u.id} className="single-user">
          <div className="user-info">
            <img src={u.profile_image.large} alt={u.name} />
            <div className="user-names">
              <h3>{u.name}</h3>
              <p>{"@" + u.username}</p>
            </div>
          </div>
          <button className="view-user">View profile</button>
        </Link>
      ))}
    </div>
  );
};

export default Users;
