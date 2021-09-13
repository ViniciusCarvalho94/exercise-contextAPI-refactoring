import React from 'react';
import './App.css';
import Cars from './components/Cars';
import FatherCars from './components/FatherCars';
import TrafficSignal from './components/TrafficSignal';

function App() {
  return (
    <FatherCars>
      <Cars />
      <TrafficSignal />
    </FatherCars>
  );
}

export default App;
