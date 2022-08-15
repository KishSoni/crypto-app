import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Coin = () => {
  const param = useParams();

  const [coin, setCoin] = useState({});

  const url = `https://api.coingecko.com/api/v3/coins/${param.coinId}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoin(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>{coin.id}</h1>
    </div>
  );
};

export default Coin;
