import React from "react";
import image from "./me.jpg";

const Author = () => {
  return (
    <div className="authorBox">
      <div className="img-box">
        <img src={image} alt="user" />
      </div>
      <div className="author-name">
        <h3>Kishor Mahmud</h3>
        <p>
          <i class="fa-solid fa-location-dot"></i> Dhaka, Bangladesh
        </p>
      </div>
    </div>
  );
};

export default Author;
