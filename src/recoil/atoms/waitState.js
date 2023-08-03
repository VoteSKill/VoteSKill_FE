import { atom } from 'recoil';

// roomList 받아오기
export const getUserList = async () => {
  // try {
  //   const response = await axios.get('http://localhost:8000/rooms/:roomid');
  //   return response.data;
  // } catch (error) {
  //   console.log(error);
  //   return [];
  // }
};

export const waitingUser = atom({
  key: 'waitingUser',
  default: ['병국', '석준', '정인', '채영', '종명', '종호'],
});
