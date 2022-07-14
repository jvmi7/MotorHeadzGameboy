import { useRecoilState } from 'recoil';
import { isImportOrExportSpecifier } from 'typescript';
import { control, sound } from '../../../state';
import ProgressBar from '../../ui/ProgressBar/ProgressBar';
import './HomeScreen.scss';
import { AnimatePresence, motion } from 'framer-motion';

import A from '../../../assets/nfts/a.webp';
import B from '../../../assets/nfts/b.webp';
import C from '../../../assets/nfts/c.webp';
import LinkCard from '../../ui/LinkCard/LinkCard';
import { useEffect, useState } from 'react';
import { CONTROLS } from '../../../types';
import { bgColors, images, imgs, links, subtitles, titles } from './constants';

function HomeScreen() {
  const [soundState, setSoundState] = useRecoilState(sound);

  const quantityRemaining = 1234;
  const totalSupply = 4321;
  const mintLabel = quantityRemaining > 0 ? 'mint is live' : 'sold out';

  const [controlState, setControlState] = useRecoilState(control);
  const [menuIndex, setMenuIndex] = useState(0);

  useEffect(() => {
    if (controlState.last === CONTROLS.RIGHT) {
      if (menuIndex < 3) {
        const newControlState = { last: '', history: [...controlState.history] };
        setControlState(newControlState);
        setMenuIndex(menuIndex + 1);
      }
    }

    if (controlState.last === CONTROLS.LEFT) {
      if (menuIndex > 0) {
        const newControlState = { last: '', history: [...controlState.history] };
        setControlState(newControlState);
        setMenuIndex(menuIndex - 1);
      }
    }

    if (controlState.last === CONTROLS.A) {
      window.open(links[menuIndex], '_blank');
    }
  });

  return (
    <div className='homeScreen__container'>
      <h1 className='header'>motorheadz</h1>
      <div className='mintWrapper'>
        <div className='imageWrapper'>
          <img src={images[menuIndex][0]} alt='nft' />
          <img src={images[menuIndex][1]} alt='nft' />
          <img src={images[menuIndex][2]} alt='nft' />
        </div>
        <p className='mintLabel'>{mintLabel}</p>

        <div className='progressBarWrapper'>
          <ProgressBar current={quantityRemaining} total={totalSupply} />
        </div>

        <p className='quantityRemaining'>
          {quantityRemaining}/{totalSupply} remaining.
        </p>
      </div>
      <LinkCard title={titles[menuIndex]} subtitle={subtitles[menuIndex]} imgSrc={menuIndex} backgroundColor={bgColors[menuIndex]} showLeft={menuIndex > 0} showRight={menuIndex < 3} />
    </div>
  );
}

export default HomeScreen;
