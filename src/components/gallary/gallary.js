import React from "react";
import "./gallary.css";

const Gallary = (props) => {
  return (
    <div className="img-gallary">
      {props.photos.map((p) => (
        <img 
            key={p.id} 
            src={p.urls.regular} 
            alt={p.alt_description}
            style={{height:`calc(${p.height}px % 10px)`}} />
      ))}
    </div>
  );
};

export default Gallary;
