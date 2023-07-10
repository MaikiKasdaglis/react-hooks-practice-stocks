import React from "react";

function Stock({stock, cardfun}) {

  const {id, ticker, name, type, price} = stock
  return (
    <div>
      <div className="card" onClick={e => cardfun(id)}>
        <div className="card-body">
          <h5 className="card-title" >{name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
