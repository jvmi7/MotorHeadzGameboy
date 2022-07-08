import './LinkCard.scss';

function LinkCard() {
  const title = 'mint';
  const subtitle = 'motorheadz are free to mint on quixotic';

  const style = { backgroundColor: 'red' };

  return (
    <div className='linkCard__container' style={style}>
      <div className='imgWrapper'>
        <img src={require('../../../assets/nfts/green.png')} alt='' />
      </div>

      <div className='infoWrapper'>
        <p className='arrow left'>{'<'}</p>
        <div className='info'>
          <p className='title'>{title}</p>
          <p className='subtitle'>{subtitle}</p>
        </div>
        <p className='arrow left'>{'>'}</p>
      </div>
    </div>
  );
}

export default LinkCard;
