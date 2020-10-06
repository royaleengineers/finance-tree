import React from 'react';
import {Header} from './Components/Header';
import LineChart from './Components/LineChart';
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <div className='chart'>
        <LineChart />
      </div>
      </div>

  )
}

export default App;
