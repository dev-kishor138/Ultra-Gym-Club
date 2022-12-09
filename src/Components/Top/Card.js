import React from "react";
import useDumble from "../../hooks/useDumble";

const Card = ({ setTotalTime }) => {
  const items = useDumble();

  const clickHandler = (item) => {
    
    setTotalTime((prevTime) => prevTime + item.time)
  }

  return (
    <div className="cardContainer">
      {items.map((item) => (
        <div className="card">
          <div className="img-box">
            <img src={item.img} alt="User"></img>
          </div>
          <div className="text-box">
            <h4>{item.title}</h4>
            <p className="description">{item.body}</p>
            <p>For Age: {item.age}</p>
            <p>Time required : {item.time}s</p>
            <button 
              onClick={() => clickHandler(item)}
            >
              Add To List
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
