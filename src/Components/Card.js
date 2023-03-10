import React from "react";
import "./style/Card.css";

const Card = ({ urlImage }) => {
  return (
    <div className="imagecard">
      <div className="imagecard-header">
        <img className="img-imagecard-header" src={urlImage} />
      </div>
      <div className="imagecard-body">
        <p className="imagecard-title-body">15 Coins</p>
        <p className="imagecard-sub-body">
          50% discount for every $100 top-up on your Shell Petrol Card
        </p>
      </div>
    </div>
  );
};

export default Card;
