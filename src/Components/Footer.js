import React from "react";
import "./style/Footer.css";
import icon1 from "../Images/Icon_1.svg";
import icon2 from "../Images/Icon_2.svg";
import icon3 from "../Images/Icon_3.svg";
import icon4 from "../Images/Icon_4.svg";
const Footer = () => {
  return (
    <div className="footer flex">
      <div className="icon_footer">
        <img className="img-icon" src={icon1} />
      </div>
      <div className="icon_footer notice">
        <img className="img-icon" src={icon2} />
        <div className="dot-notice"></div>
      </div>
      <div className="icon_footer">
        <img className="img-icon" src={icon3} />
      </div>
      <div className="icon_footer">
        <img className="img-icon" src={icon4} />
      </div>
    </div>
  );
};

export default Footer;
