import { atom } from 'recoil';

export const control = atom({
  key: 'control',
  default: { last: '', history: [''] }
});

export const sound = atom({
  key: 'sound',
  default: ''
});
