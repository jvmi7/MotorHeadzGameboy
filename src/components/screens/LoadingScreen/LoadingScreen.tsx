import { useState, useEffect } from 'react';
import './LoadingScreen.scss';
import useSound from 'use-sound';

function LoadingScreen() {
  return (
    <div className='loadingScreen__container'>
      <h1>
        <span>F</span>
        <span>L</span>
        <span>A</span>
        <span>M</span>
        <span>E</span> <span>B</span>
        <span>O</span>
        <span>Y</span>
      </h1>
    </div>
  );
}

export default LoadingScreen;
