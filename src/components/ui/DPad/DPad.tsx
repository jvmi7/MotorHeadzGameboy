import "./DPad.scss"

function DPad() {
  return (
    <div className="dPad__container">
      <div></div>
      <button className="up">
        <div className="triangle"></div>
      </button>
      <div></div>
      <button className="left"><div className="triangle"></div></button>
      <div className="middle">
        <span className="vertical"></span>
        <span className="horizontal"></span>
        <span className="shadow"></span>
        <span className="circle"></span>
      </div>
      <button className="right"><div className="triangle"></div></button>
      <div></div>
      <button className="down"><div className="triangle"></div></button>
      <div></div>
    </div>
  )
}

export default DPad