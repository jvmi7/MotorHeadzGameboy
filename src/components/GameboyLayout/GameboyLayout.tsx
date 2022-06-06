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
        <p className="gameboyLayout__displayTitle">
          <span>MOTOR</span>
          <span className="color">
            <span style={{ color: "#b80a41" }}>H</span>
            <span style={{ color: "#4e4ba8" }}>E</span>
            <span style={{ color: "#6eb122" }}>A</span>
            <span style={{ color: "#daac06" }}>D</span>
            <span style={{ color: "#00938a" }}>Z</span>
          </span></p>
      </div>
      <div className="gameboyLayout__buttons">
        {buttons}
      </div>
    </div>
  )
}

export default GameboyLayout