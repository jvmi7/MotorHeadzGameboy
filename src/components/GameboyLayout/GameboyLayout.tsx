import "./GameboyLayout.scss";

interface Props {
  display: JSX.Element,
  buttons: JSX.Element,

}

function GameboyLayout({ display, buttons }: Props) {
  return (
    <div className="gameboyLayout__container">
      <div className="gameboyLayout__display">
        {display}
      </div>
      <div className="gameboyLayout__buttons">
        {buttons}
      </div>
    </div>
  )
}

export default GameboyLayout