import React from "react";
import { Link } from "react-router-dom";
import './User.css';

const Users = (props) => {
  console.log("user: ", props.users);
  return (
    <div className="users">
      {props.users.map((u) => (
        <Link to={"/@" + u.user.username} key={u.id} className="single-user">
          <div className="user-info">
            <img src={u.user.profile_image.large} alt={u.user.name} />
            <div className="user-names">
              <h3>{u.user.name}</h3>
              <p>{"@" + u.user.username}</p>
            </div>
          </div>
          <button className="view-user">View profile</button>
        </Link>
      ))}
    </div>
  );
};

export default Users;
