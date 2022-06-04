import "./ButtonsLayout.scss";

import { ReactComponent as Mic } from '../../assets/mic.svg';


interface Props {
  dPad: JSX.Element,
  aButton: JSX.Element,
  bButton: JSX.Element,
  startButton: JSX.Element,
  selectButton: JSX.Element,
}


function ButtonsLayout({ dPad, aButton, bButton, startButton, selectButton }: Props) {
  return (
    <div className='buttonsLayout__container'>
      <span className='branding' >bootleg</span>
      <div className='buttonsLayout__top'>
        <div className='buttonsLayout__left'>
          {dPad}
        </div>
        <div className='buttonsLayout__right'>
          {aButton}
          {bButton}
        </div>
      </div>
      <div className='buttonsLayout__bottom'>
        {startButton}
        {selectButton}
      </div>
      <Mic className="buttonsLayout__mic" />
    </div>
  )
}

export default ButtonsLayout