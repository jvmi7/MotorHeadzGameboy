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

interface Props {
  onBack: () => void;
  onNext: () => void;
}
function HomeScreen({ onBack, onNext }: Props) {
  const [soundState, setSoundState] = useRecoilState(sound);

  const quantityRemaining = 1234;
  const totalSupply = 4321;
  const mintLabel = quantityRemaining > 0 ? 'mint is live' : 'sold out';

  const [controlState, setControlState] = useRecoilState(control);
  const [menuIndex, setMenuIndex] = useState(1);

  useEffect(() => {
    if (controlState.last === CONTROLS.RIGHT || controlState.last === CONTROLS.LEFT) {
      const newControlState = { last: '', history: [...controlState.history] };
      setControlState(newControlState);
      setMenuIndex(menuIndex === 1 ? 0 : 1);
    }

    if (controlState.last === CONTROLS.A) {
      if (menuIndex === 0) {
        const newControlState = { last: '', history: [...controlState.history] };
        setControlState(newControlState);
        onBack();
      } else {
        const newControlState = { last: '', history: [...controlState.history] };
        setControlState(newControlState);
        onNext();
      }
    }
  });

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  };

  return (
    <div className='homeScreen__container'>
      <motion.h1 animate={{ y: [-100, 0] }} transition={{ duration: 1, delay: 1.5, ease: 'easeOut' }} className='header'>
        motorheadz
      </motion.h1>
      <div className='mintWrapper'>
        <motion.div initial='hidden' animate='visible' variants={variants} transition={{ delay: 0.2 }} className='imageWrapper'>
          <img src={images[menuIndex][0]} alt='nft' />
          <img src={images[menuIndex][1]} alt='nft' />
          <img src={images[menuIndex][2]} alt='nft' />
        </motion.div>
        <motion.p animate={{ x: [-100, 0], opacity: [0, 1] }} transition={{ duration: 0.75, delay: 0.75, ease: 'easeOut' }} className='mintLabel'>
          {mintLabel}
        </motion.p>

        <motion.div initial='hidden' animate='visible' variants={variants} transition={{ duration: 0.5 }} className='progressBarWrapper'>
          <ProgressBar current={quantityRemaining} total={totalSupply} />
        </motion.div>

        <motion.p animate={{ x: [100, 0], opacity: [0, 1] }} transition={{ duration: 0.75, delay: 0.75, ease: 'easeOut' }} className='quantityRemaining'>
          {quantityRemaining}/{totalSupply} remaining.
        </motion.p>
      </div>
      <div>
        <motion.div initial='hidden' animate='visible' variants={variants} transition={{ duration: 1, delay: 1 }} className='buttonContainer'>
          <button className={`${menuIndex === 0 ? 'exit' : ''}`}>exit</button>
          <button className={`${menuIndex === 1 ? 'enter' : ''}`}>vroom</button>
        </motion.div>
        <motion.p animate={{ y: [100, 0] }} transition={{ duration: 1, delay: 1.5, ease: 'easeOut' }} className='instructions'>
          {'arrows to navigate, A to select'}
        </motion.p>
      </div>

      {/* <LinkCard title={titles[menuIndex]} subtitle={subtitles[menuIndex]} imgSrc={menuIndex} backgroundColor={bgColors[menuIndex]} showLeft={menuIndex > 0} showRight={menuIndex < 3} /> */}
    </div>
  );
}

export default HomeScreen;
