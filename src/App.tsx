import React from 'react';
import './App.css';
import CircularButton from './components/ui/CircleButton/CircularButton';
import GameboyLayout from './components/GameboyLayout/GameboyLayout';
import ButtonsLayout from './components/ButtonsLayout/ButtonsLayout';
import DPad from './components/ui/DPad/DPad';
import FlatButton from './components/ui/FlatButton/FlatButton';
import Display from './components/ui/Display/Display';
import FlameText from './components/ui/FlameText/FlameText';

function App() {


  const handleAClicked = () => {
    console.log("A Clicked")
  }

  const handleBClicked = () => {
    console.log("B Clicked")
  }

  const handleStartClicked = () => {
    console.log("Start Clicked")
  }

  const handleSelectClicked = () => {
    console.log("Select Clicked")
  }

  return (
    <>

      <FlameText text="Motor Headz" />
      <div className='app__container'>

        <GameboyLayout
          display={
            <Display />
          }
          buttons={
            <ButtonsLayout
              dPad={<DPad />}
              aButton={<CircularButton letter="A" onClick={handleAClicked} />}
              bButton={<CircularButton letter="B" onClick={handleBClicked} />}
              startButton={<FlatButton onClick={handleStartClicked} text="strt" />}
              selectButton={<FlatButton onClick={handleSelectClicked} text="slct" />}
            />
          } />
      </div>
    </>
  );
}

export default App;
