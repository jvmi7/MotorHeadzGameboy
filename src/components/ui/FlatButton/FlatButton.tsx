
import "./FlatButton.scss";

interface Props {
  onClick: () => void;
  text: string;
}
function FlatButton({ onClick, text }: Props) {
  return (
    <div className="flatButton__container">
      <button onClick={onClick} />
      <p>{text}</p>
    </div>
  )
}

export default FlatButton