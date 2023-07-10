import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, buildPort}) {
  return (
    <div>
      <h2>Stocks</h2>
     {stocks.map((stock) => <Stock key ={stock.id} stock={stock} cardfun={buildPort}/>)}
    </div>
  );
}

export default StockContainer;
