import React, { useState } from 'react';
import './App.css';
import { HeaderContainer } from './components/HeaderContainer/HeaderContainer';
import { DataContainer } from './components/DataContainer/DataContainer';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [startDate, setStartDate] = useState(new Date(2011, 0));
  const [endDate, setEndDate] = useState(new Date());

  const handleChangeStartDate = (date: Date) => {
    setStartDate(date);
  }

  const handleChangeEndDate = (date: Date) => {
    setEndDate(date)
  }

  return (
    <div className="App">
      <HeaderContainer
      onChangeStart={handleChangeStartDate}
      onChangeEnd={handleChangeEndDate}
      startDate={startDate}
      endDate={endDate}
      />
      <DataContainer 
      startDate={startDate}
      endDate={endDate}
      />
    </div>
  );
}

export default App;
