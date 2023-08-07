import { atom, selector } from 'recoil';
import axios from 'axios';

// roomList 받아오기
export const getRoomList = async () => {
  // try {
  //   const response = await axios.get('http://localhost:8000/rooms');
  //   return response.data;
  // } catch (error) {
  //   console.log(error);
  //   return [];
  // }
};

export const responseData = atom({
  key: 'responseData',
  default: [
    {
      name: '마피아',
      password: 'asdasd',
      host: '병국',
      admitNumber: 6,
      people: '1',
    },
    {
      name: '봇츠킬',
      password: '',
      host: '병국',
      admitNumber: 6,
      people: '2',
    },
    {
      name: '이겨내',
      password: 'asasd',
      host: '병국',
      admitNumber: 6,
      people: '3',
    },
    {
      name: '행복하게',
      password: '1231',
      host: '병국',
      admitNumber: 6,
      people: '4',
    },
    {
      name: '즐겜',
      password: 'dsvs1',
      host: '병국',
      admitNumber: 6,
      people: '5',
    },
    {
      name: '정인',
      password: '',
      host: '병국',
      admitNumber: 6,
      people: '1',
    },
    {
      name: '예에',
      password: '',
      host: '병국',
      admitNumber: 6,
      people: '3',
    },
    {
      name: '스크롤되나?',
      password: 'asdasd',
      host: '병국',
      admitNumber: 6,
      people: '6',
    },
    {
      name: '된스다',
      password: '',
      host: '병국',
      admitNumber: 6,
      people: '1',
    },
    {
      name: '진마짜',
      password: '',
      host: '병국',
      admitNumber: 6,
      people: '2',
    },
  ],
});

// export const checkLevelAll = atom({
//   key: 'levelAll',
//   default: ['게임중', '초보', '중수', '고수'],
// });

// export const RoomList = selector({
//   key: 'RoomList',
//   get: async ({ get }) => {
//     const roomList = await getRoomList(); // roomList를 가져와서,,
//     // roomList를 Recoil 상태에 업데이트 하기
//     const roomNames = roomList.map((room) => room.name);
//     const passwords = roomList.map((room) => room.password);
//     const personCounts = roomList.map((room) => room.admitNumber.toString());
//     const roomLevels = roomList.map((room) => room.people);

//     get(roomAll) !== roomNames && (await roomAll(roomNames));
//     get(personCountAll) !== personCounts && (await personCountAll(personCounts));
//     get(passwordRoomAll) !== passwords && (await passwordRoomAll(passwords));
//     get(roomLevelAll) !== roomLevels && (await roomLevelAll(roomLevels));
//     console.log('asddddddddddd');
//     return roomList;
//   },
// });
