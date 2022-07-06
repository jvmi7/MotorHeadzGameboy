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
