import React, { useEffect, useState } from 'react';
import './App.css';
import CircularButton from './components/ui/CircleButton/CircularButton';
import GameboyLayout from './components/GameboyLayout/GameboyLayout';
import ButtonsLayout from './components/ButtonsLayout/ButtonsLayout';
import DPad from './components/ui/DPad/DPad';
import FlatButton from './components/ui/FlatButton/FlatButton';
import Display from './components/ui/Display/Display';
import LoadingScreen from './components/screens/LoadingScreen/LoadingScreen';
import PressStartScreen from './components/screens/PressStartScreen/PressStartScreen';
import useSound from 'use-sound';
import IdleScreen from './components/screens/IdleScreen/IdleScreen';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import SoundScreen from './components/screens/SoundScreen/SoundScreen';
import { control, sound } from './state';
import { CONTROLS, SOUND } from './types';
const music = require('./assets/audio/videogame-song.mp3');
const onSound = require('./assets/audio/gameboy-startup.m4a');

function App() {
  const [play] = useSound(music);
  const [playStart] = useSound(onSound);
  const [isIdle, setIsIdle] = useState(true);
  const [controlState, setControlState] = useRecoilState(control);
  const [soundState, setSoundState] = useRecoilState(sound);

  const handleButtonClicked = (action: CONTROLS) => {
    const newState = {
      last: action,
      history: [...controlState.history, action]
    };
    setControlState(newState);
  };

  const [currentScreen, setCurrentScreen] = useState(<IdleScreen />);

  useEffect(() => {
    if (!isIdle) {
      playStart();
      setTimeout(() => {
        setCurrentScreen(<LoadingScreen />);
      }, 200);

      setTimeout(() => {
        setCurrentScreen(
          <SoundScreen
            onNext={(sound) => {
              console.log(sound);
              setCurrentScreen(<PressStartScreen />);
              if (sound === SOUND.ON) play();
            }}
          />
        );
      }, 1700);
    }
  }, [isIdle]);

  return (
    <>
      <div
        className='app__container'
        onClick={() => {
          setIsIdle(false);
        }}
      >
        <GameboyLayout
          display={<Display screen={currentScreen} />}
          buttons={
            <ButtonsLayout
              dPad={<DPad />}
              aButton={
                <CircularButton
                  letter='A'
                  onClick={() => {
                    handleButtonClicked(CONTROLS.A);
                  }}
                />
              }
              bButton={
                <CircularButton
                  letter='B'
                  onClick={() => {
                    handleButtonClicked(CONTROLS.B);
                  }}
                />
              }
              startButton={
                <FlatButton
                  onClick={() => {
                    handleButtonClicked(CONTROLS.START);
                  }}
                  text='strt'
                />
              }
              selectButton={
                <FlatButton
                  onClick={() => {
                    handleButtonClicked(CONTROLS.SELECT);
                  }}
                  text='slct'
                />
              }
            />
          }
        />
      </div>
    </>
  );
}

export default App;
