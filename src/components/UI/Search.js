import React, { useState } from "react";
import './Search.css';


const Search = (props) => {
  const [item, setItem] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.onSubmitHandler(item);
    setItem("");
  };
  return (
    <div className="search-div">
      <form onSubmit={onSubmitHandler}>
        <input
          className="search"
          type="text"
          placeholder="Search photos"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
