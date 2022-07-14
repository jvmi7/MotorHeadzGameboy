import { useRecoilState } from 'recoil';
import './DPad.scss';
import { control } from '../../../state';
import { CONTROLS } from '../../../types';

interface Props {
  color: string;
}
function DPad({ color }: Props) {
  const [controlState, setControlState] = useRecoilState(control);

  const style = { backgroundColor: color };

  return (
    <div className='dPad__container'>
      <div></div>
      <button
        style={style}
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
        style={style}
        className='left'
        onClick={() => {
          const newState = {
            last: CONTROLS.LEFT,
            history: [...controlState.history, CONTROLS.LEFT]
          };
          setControlState(newState);
        }}
      >
        <div className='triangle'></div>
      </button>
      <div className='middle'>
        <span className='vertical' style={style}></span>
        <span className='horizontal' style={style}></span>
        <span className='shadow'></span>
        <span className='circle'></span>
      </div>
      <button
        style={style}
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
        style={style}
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
