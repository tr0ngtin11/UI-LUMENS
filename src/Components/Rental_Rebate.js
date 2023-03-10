import React from "react";
import cardHeader3 from "../Images/Image_3.svg";
import cardHeader4 from "../Images/Image_4.svg";
import ListCard from "./ListCard";
const Rental_Rebate = () => {
  return (
    <ListCard
      cardHeaderLeft={cardHeader3}
      cardHeaderRight={cardHeader4}
      ListName="Rental Rebate"
    />
  );
};

export default Rental_Rebate;
