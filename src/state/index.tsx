import { atom } from 'recoil';
import { SOUND } from '../types';

export const control = atom({
  key: 'control',
  default: { last: '', history: [''] }
});

export const sound = atom({
  key: 'sound',
  default: ''
});

export const gameboyColor = atom({
  key: 'gbColor',
  default: {
    base: '#00bce3',
    a: '#2b2b2b',
    b: '#2b2b2b',
    dpad: '#2b2b2b',
    start: '#2b2b2b'
  }
});
