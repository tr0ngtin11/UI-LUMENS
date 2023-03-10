import React from "react";
import cardHeader5 from "../Images/Image_5.svg";
import cardHeader6 from "../Images/Image_6.svg";
import ListCard from "./ListCard";
const Food_and_Beverage = () => {
  return (
    <ListCard
      cardHeaderLeft={cardHeader5}
      cardHeaderRight={cardHeader6}
      ListName="Food and Beverage"
    />
  );
};

export default Food_and_Beverage;
