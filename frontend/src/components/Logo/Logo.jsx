import React from "react";
import Tilt from "react-tilt";
import './logo.css';
import brain from './brain2.png';

function Logo() {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt Tilt-custom br-2 shadow-2"
        options={{ max: 45 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner"> <img className="logo-image" alt="logo" src={brain}/> </div>
      </Tilt>
    </div>
  );
}

export default Logo;
