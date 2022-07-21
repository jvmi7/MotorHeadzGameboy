import './ProgressBar.scss';

interface Props {
  current: number;
  total: number;
}
function ProgressBar({ current, total }: Props) {
  const progressStyle = { width: `${(current / total) * 98}%`, backgroundColor: '#4AEEFF' };
  return (
    <div className='progressBar__container'>
      <div className='fill' style={progressStyle}></div>
    </div>
  );
}

export default ProgressBar;
