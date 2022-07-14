import { useRecoilState } from 'recoil';
import { gameboyColor } from '../../state';
import './GameboyLayout.scss';

interface Props {
  display: JSX.Element;
  buttons: JSX.Element;
}

function GameboyLayout({ display, buttons }: Props) {
  const [gameboyColorState, setGameboyColorState] = useRecoilState(gameboyColor);

  const style = { backgroundColor: gameboyColorState.base };

  return (
    <div className='gameboyLayout__container' style={style}>
      <div className='gameboyLayout__display'>
        {display}
        <p className='gameboyLayout__displayTitle'>
          <span>FLAMEBOY</span>
          <span className='color'>
            <span style={{ color: '#b80a41' }}>C</span>
            <span style={{ color: '#4e4ba8' }}>O</span>
            <span style={{ color: '#6eb122' }}>L</span>
            <span style={{ color: '#daac06' }}>O</span>
            <span style={{ color: '#00938a' }}>R</span>
          </span>
        </p>
      </div>
      <div className='gameboyLayout__buttons'>{buttons}</div>
    </div>
  );
}

export default GameboyLayout;
