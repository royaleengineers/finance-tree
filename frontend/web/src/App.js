import React from 'react';
import {Header} from './Components/Header';
import LineChart from './Components/LineChart';
import Carousel from 'react-elastic-carousel';
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/core";
import './App.css';
const loaderCSS=css`
margin-top: 25px;
margin-bottom: 25px;
`

function App() {
  return (
    <div>
      <Header/>
      <ClipLoader css={loaderCSS} size={24} color= 'black' loading/>
      <Carousel>
      <LineChart />

      </Carousel>
      <div className='chart'>
        
      </div>
      </div>

  )
}

export default App;
