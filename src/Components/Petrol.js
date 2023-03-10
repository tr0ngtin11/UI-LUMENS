import React from "react";
import Card from "./Card";
import cardHeader1 from "../Images/Image_1.svg";
import cardHeader2 from "../Images/Image_2.svg";
import "./style/Petrol.css";
import ListCard from "./ListCard";
const Petrol = (ListName) => {
  return (
    <ListCard
      cardHeaderLeft={cardHeader1}
      cardHeaderRight={cardHeader2}
      ListName="Petrol"
    />
  );
};

export default Petrol;
