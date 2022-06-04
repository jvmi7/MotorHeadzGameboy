import React from 'react'
import "./CircularButton.scss"


interface Props {
  letter: string;
  onClick: () => void;
}
function CircularButton({ letter, onClick }: Props) {

  return (
    <button onClick={onClick} className='circularButton__container'>
      {letter}
    </button>
  )
}

export default CircularButton