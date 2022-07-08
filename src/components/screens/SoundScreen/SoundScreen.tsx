import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { control, sound } from '../../../state';
import './SoundScreen.scss';
import { CONTROLS, SOUND } from '../../../types';

interface Props {
  onNext: (sound: string) => void;
}
function SoundScreen({ onNext }: Props) {
  const [controlState, setControlState] = useRecoilState(control);
  const [soundState, setSoundState] = useRecoilState(sound);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const options = ['sound on', 'sound off'];

  useEffect(() => {
    if (controlState.last === CONTROLS.UP || controlState.last === CONTROLS.DOWN) {
      setSelectedIndex(selectedIndex === 0 ? 1 : 0);
    }

    if (controlState.last === CONTROLS.A) {
      const newSoundState = selectedIndex === 0 ? SOUND.ON : SOUND.OFF;
      onNext(newSoundState);
      const newControlState = { last: '', history: [...controlState.history] };
      setControlState(newControlState);
    }
  }, [controlState]);

  return (
    <div className='soundScreen__container'>
      <ul>
        {options.map((option, index) => (
          <div className='optionWrapper'>
            {selectedIndex === index && <span>{'>'}</span>}
            <li key={index}>{option}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default SoundScreen;
