import "./FlameText.scss";

interface Props {
  text: string;
}
function FlameText({ text }: Props) {
  return (
    <p className="text">{text}</p>
  )
}

export default FlameText