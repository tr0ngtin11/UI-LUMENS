import React from "react";
import btnBack from "../Images/chevron-left 2.svg";
import btnRight from "../Images/chevron-right.svg";
import "./style/Title.css";
const Title = () => {
  return (
    <div className="title">
      <div className="container">
        <div className="btn-back">
          <img className="icon-custom" src={btnBack} />
        </div>

        <div>
          <p className="text-title">Silver Tier</p>
          <p className="text-sub">
            In Silver Tier, every $1 in rental fee paid, you get 2 coins to
            redeem exclusive rewards.
          </p>
        </div>
        <div className="card">
          <div className="card-content">
            <p className="card-title">Available Coin balance</p>
            <p className="card-number">340</p>
            <div className="card-process">
              <div className="process-loading"></div>
            </div>
            <p className="process-text-sub">
              You have paid rental fee for $1,200. Pay more $800 to achieve Gold
              Tier.
            </p>
            <div className="benefit">
              <span className="benifit-text">View tier benefits</span>
              <img src={btnRight} />
            </div>
          </div>
          <div className="btn-mycoupons">
            <button type="button" className="btn-coupons">
              My Coupons
            </button>
          </div>
          <p className="btn-text-sub">Updated : 02/11/2021</p>
        </div>
      </div>
    </div>
  );
};
export default Title;
