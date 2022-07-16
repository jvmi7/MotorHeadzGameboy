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
    base: '#8745c4',
    a: '#00742f',
    b: '#f32e2e',
    dpad: '#424242',
    start: '#424242'
  }
});
