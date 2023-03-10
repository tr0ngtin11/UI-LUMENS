import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import "./style/ListCard.css";
const ListCard = ({ cardHeaderLeft, cardHeaderRight, ListName }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [deltaX, setDeltaX] = useState(0);
  const ref = useRef(null);
  const handleTouchStart = (event) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const handleTouchMove = (event) => {
    console.log("touch move", touchStartX);
    if (touchStartX === null) {
      return;
    }
    const touchMoveX = event.touches[0].clientX;
    const deltaX_ = touchMoveX - touchStartX;
    console.log(touchMoveX);
    setDeltaX(deltaX_);

    if (deltaX_ > 0) {
      setCurrentIndex(currentIndex - 2);
    } else if (deltaX_ < 0) {
      setCurrentIndex(currentIndex + 2);
    }
  };
  const handleTouchEnd = () => {
    setTouchStartX(null);
  };

  return (
    <div className="listcard">
      <div className="container-listcard">
        <p className="listcard-title">{ListName}</p>
        <div
          ref={ref}
          className="row-card"
          style={{
            transform: `translateX(-${
              currentIndex <= 54 ? currentIndex : 54
            }% )`,
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <Card urlImage={cardHeaderLeft} />
          <Card urlImage={cardHeaderRight} />
          <Card urlImage={cardHeaderRight} />
          <Card urlImage={cardHeaderRight} />
        </div>
      </div>
    </div>
  );
};

export default ListCard;
