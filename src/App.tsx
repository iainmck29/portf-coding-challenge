import React, { useState } from 'react';
import './App.css';
import { HeaderContainer } from './components/HeaderContainer/HeaderContainer';
import { DataContainer } from './components/DataContainer/DataContainer';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [startDate, setStartDate] = useState(new Date(2011, 0));
  const [endDate, setEndDate] = useState(new Date());
  const [ABV, setABV] = useState(0.0);

  const handleChangeStartDate = (date: Date) => {
    setStartDate(date);
  }

  const handleChangeEndDate = (date: Date) => {
    setEndDate(date)
  }

  const handleChangeABV = (abv: string) => {
    setABV(parseInt(abv))
  }

  return (
    <div className="App">
      <HeaderContainer
      onChangeStart={handleChangeStartDate}
      onChangeEnd={handleChangeEndDate}
      startDate={startDate}
      endDate={endDate}
      onChangeABV={handleChangeABV}
      />
      <DataContainer 
      startDate={startDate}
      endDate={endDate}
      abv={ABV}
      />
    </div>
  );
}

export default App;
