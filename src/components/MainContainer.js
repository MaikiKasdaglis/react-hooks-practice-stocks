import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [port, setPort] = useState([])
  const [stocks, setStocks] = useState([])
  const [type, setType] = useState('Tech')
  const [radio, setRadio] = useState('')

  useEffect(() => {
    fetch(`http://localhost:3001/stocks`)
    .then(r => r.json())
    .then(d => setStocks(d))
  }, [])

  function buildPort(id) {
    let boughtStock = stocks.find((stock) => stock.id === id)
    setPort([...port, boughtStock])
  }
  function handleDelete(id) {
    console.log(`delete`, id)
    console.log(`port array`, port)
    let newPort = port.filter((stock) => stock.id !== id)
    setPort(newPort)
  }
  function filterType(type) {
    setType(type)
  }

  function radioButton(value) {
    setRadio(value)
  }

const sortedArray = stocks.sort((a, b) => {
  if (radio === 'Alphabetically') { return a.name.localeCompare (b.name)
  } else {return a.price - b.price}
})


  const filterArray = sortedArray
  .filter((stock) => stock.type === type)



  return (
    <div>
      <SearchBar filterType={filterType} radioButton={radioButton}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filterArray} buildPort={buildPort}/>
        </div>
        <div className="col-4">
          <PortfolioContainer port={port} handleDelete={handleDelete}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
