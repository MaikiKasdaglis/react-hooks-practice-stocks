import React from "react";
import Stock from "./Stock";

function PortfolioContainer({port, handleDelete}) {


  return (
    <div>
      <h2>My Portfolio</h2>
        {port.map((stock) => <Stock key={stock.id} stock={stock} cardfun={handleDelete}/>)}
    </div>
  );
}

export default PortfolioContainer;
