import { useRecoilState } from 'recoil';
import { isImportOrExportSpecifier } from 'typescript';
import { sound } from '../../../state';
import ProgressBar from '../../ui/ProgressBar/ProgressBar';
import './HomeScreen.scss';

import A from '../../../assets/nfts/a.webp';
import LinkCard from '../../ui/LinkCard/LinkCard';

function HomeScreen() {
  const [soundState, setSoundState] = useRecoilState(sound);

  const quantityRemaining = 1234;
  const totalSupply = 4321;
  const mintLabel = quantityRemaining > 0 ? 'mint is live' : 'sold out';

  return (
    <div className='homeScreen__container'>
      <h1 className='header'>motorheadz</h1>
      <div className='mintWrapper'>
        <div className='imageWrapper'>
          <img src={A} alt='nft' />
          <img src={A} alt='nft' />
          <img src={A} alt='nft' />
        </div>
        <p className='mintLabel'>{mintLabel}</p>

        <div className='progressBarWrapper'>
          <ProgressBar current={quantityRemaining} total={totalSupply} />
        </div>

        <p className='quantityRemaining'>
          {quantityRemaining}/{totalSupply} remaining.
        </p>
      </div>
      <LinkCard />
    </div>
  );
}

export default HomeScreen;
