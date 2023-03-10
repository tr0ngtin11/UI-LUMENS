import React from "react";
import Food_and_Beverage from "../Components/Food_and_Beverage";
import Footer from "../Components/Footer";
import Petrol from "../Components/Petrol";
import Rental_Rebate from "../Components/Rental_Rebate";
import Title from "../Components/Title";

const Home = () => {
  return (
    <div>
      <Title />
      <Petrol />
      <Rental_Rebate />
      <Food_and_Beverage />
      <Footer />
    </div>
  );
};

export default Home;
