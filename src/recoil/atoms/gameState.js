import { atom } from 'recoil';

export const currentTimeState = atom({
  key: 'currentTimeState',
  default: 0,
});

export const isVoteTimeState = atom({
  key: 'isVoteTimeState',
  default: false,
});

export const isSkillTimeState = atom({
  key: 'isSkillTimeState',
  default: false,
});
