import React from "react";
import Coinitem from "./Coinitem";
import "./Coins.css";

const Coins = (props) => {
  return (
    <div className="container">
      <div>
        <div className="heading">
          <p>#</p>
          <p className="coin-name">Coin</p>
          <p className="coin-price">Price</p>
          <p className="price-change">%24h</p>
          <p className="hide-mobile">Volume</p>
          <p className="hide-mobile">Market Cap</p>
        </div>
        {props.coins.map((coins) => {
          return <Coinitem coins={coins} key={coins.id} />;
        })}
      </div>
    </div>
  );
};

export default Coins;
