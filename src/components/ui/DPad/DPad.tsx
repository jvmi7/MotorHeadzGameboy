import "./DPad.scss"

function DPad() {
  return (
    <div className="dPad__container">
      <div></div>
      <button className="up">^</button>
      <div></div>
      <button className="left">{"<"}</button>
      <div className="middle">
        <span className="vertical"></span>
        <span className="horizontal"></span>
        <span className="shadow"></span>
      </div>
      <button className="right">{">"}</button>
      <div></div>
      <button className="down">v</button>
      <div></div>
    </div>
  )
}

export default DPad