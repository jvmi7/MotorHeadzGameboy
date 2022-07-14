import React from 'react';
import { useRecoilState } from 'recoil';
import { gameboyColor } from '../../../state';
import './CircularButton.scss';

interface Props {
  letter: string;
  color: string;
  onClick: () => void;
}
function CircularButton({ letter, color, onClick }: Props) {
  const style = { backgroundColor: color };

  return (
    <button onClick={onClick} className='circularButton__container' style={style}>
      <span>{letter}</span>
    </button>
  );
}

export default CircularButton;
