import './LinkCard.scss';

interface Props {
  title: string;
  subtitle: string;
  imgSrc: number;
  backgroundColor: string;
  showRight: boolean;
  showLeft: boolean;
}

function LinkCard({ title, subtitle, imgSrc, backgroundColor, showRight, showLeft }: Props) {
  const style = { backgroundColor: backgroundColor };

  return (
    <div className='linkCard__container' style={style}>
      <div className='imgWrapper'>
        {imgSrc === 0 && <img src={require('../../../assets/nfts/cards/1.webp')} alt='' />}
        {imgSrc === 1 && <img src={require('../../../assets/nfts/cards/2.webp')} alt='' />}
        {imgSrc === 2 && <img src={require('../../../assets/nfts/cards/3.webp')} alt='' />}
        {imgSrc === 3 && <img src={require('../../../assets/nfts/cards/4.webp')} alt='' />}
      </div>

      <div className='infoWrapper'>
        <p className='arrow left'>{showLeft && '<'}</p>

        <div className='info'>
          <p className='title'>{title}</p>
          <p className='subtitle'>{subtitle}</p>
        </div>

        <p className='arrow left'>{showRight && '>'}</p>
      </div>
    </div>
  );
}

export default LinkCard;
