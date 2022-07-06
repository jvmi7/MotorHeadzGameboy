import { useRecoilState } from 'recoil';
import './DPad.scss';
import { control } from '../../../state';
import { CONTROLS } from '../../../types';

function DPad() {
  const [controlState, setControlState] = useRecoilState(control);

  return (
    <div className='dPad__container'>
      <div></div>
      <button
        className='up'
        onClick={() => {
          const newState = {
            last: CONTROLS.UP,
            history: [...controlState.history, CONTROLS.UP]
          };
          setControlState(newState);
        }}
      >
        <div className='triangle'></div>
      </button>
      <div></div>
      <button
        className='left'
        onClick={() => {
          const newState = {
            last: CONTROLS.DOWN,
            history: [...controlState.history, CONTROLS.DOWN]
          };
          setControlState(newState);
        }}
      >
        <div className='triangle'></div>
      </button>
      <div className='middle'>
        <span className='vertical'></span>
        <span className='horizontal'></span>
        <span className='shadow'></span>
        <span className='circle'></span>
      </div>
      <button
        className='right'
        onClick={() => {
          const newState = {
            last: CONTROLS.RIGHT,
            history: [...controlState.history, CONTROLS.RIGHT]
          };
          setControlState(newState);
        }}
      >
        <div className='triangle'></div>
      </button>
      <div></div>
      <button
        className='down'
        onClick={() => {
          const newState = {
            last: CONTROLS.DOWN,
            history: [...controlState.history, CONTROLS.DOWN]
          };
          setControlState(newState);
        }}
      >
        <div className='triangle'></div>
      </button>
      <div></div>
    </div>
  );
}

export default DPad;
