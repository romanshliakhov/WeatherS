import React from 'react';
import './Main.css';
import Weather from '../../Components/Weather/Weather';
import Sports from '../../Components/Sports/Sports';

// import { useSelector } from 'react-redux';

function Main() {
  return (
    <div className="Main">
      <Weather />
      <Sports />
    </div>
  );
}

export default Main;
