import './FlatButton.scss';

interface Props {
  onClick: () => void;
  text: string;
  color: string;
}
function FlatButton({ onClick, text, color }: Props) {
  const style = { backgroundColor: color };
  return (
    <div onClick={onClick} className='flatButton__container'>
      <button style={style} />
      <p>{text}</p>
    </div>
  );
}

export default FlatButton;
