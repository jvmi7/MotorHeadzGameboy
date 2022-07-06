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
import HomeScreen from './components/screens/HomeScreen/HomeScreen';
const music = require('./assets/audio/videogame-song.mp3');
const onSound = require('./assets/audio/gameboy-startup.m4a');
const clickSound = require('./assets/audio/click.wav');
const startSound = require('./assets/audio/start-click.wav');

function App() {
  const [play, { stop }] = useSound(music);
  const [playGameboy] = useSound(onSound);
  const [playClick] = useSound(clickSound);
  const [playStart] = useSound(startSound);
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

  const soundScreenNext = (sound: string) => {
    setSoundState(sound);
    if (sound === SOUND.ON) {
      playClick();
      setTimeout(() => {
        play();
      }, 700);
    }
    setCurrentScreen(
      <PressStartScreen
        onNext={() => {
          pressStartScreenNext(sound);
        }}
      />
    );
  };

  const pressStartScreenNext = (sound: string) => {
    if (sound === SOUND.ON) {
      stop();
      playStart();
    }
    setCurrentScreen(<HomeScreen />);
  };

  useEffect(() => {
    if (!isIdle && soundState === '') {
      playGameboy();
      setTimeout(() => {
        setCurrentScreen(<LoadingScreen />);
      }, 200);

      setTimeout(() => {
        setCurrentScreen(<SoundScreen onNext={soundScreenNext} />);
      }, 1700);
    }
  }, [isIdle, soundState]);

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
