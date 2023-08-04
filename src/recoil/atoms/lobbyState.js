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
      roomName: '마피아',
      roomId: 0,
      roomPassword: 'asdasd',
      roomPersonCount: '1',
      roomLevel: ['초보', '중수'],
    },
    {
      roomName: '봇츠킬',
      roomId: 1,
      roomPassword: '',
      roomPersonCount: '2',
      roomLevel: ['초보'],
    },
    {
      roomName: '이겨내',
      roomId: 2,
      roomPassword: 'asasd',
      roomPersonCount: '3',
      roomLevel: ['초보', '중수', '고수'],
    },
    {
      roomName: '행복하게',
      roomId: 3,
      roomPassword: '1231',
      roomPersonCount: '4',
      roomLevel: ['초보', '고수'],
    },
    {
      roomName: '즐겜',
      roomId: 4,
      roomPassword: 'dsvs1',
      roomPersonCount: '5',
      roomLevel: ['고수'],
    },
    {
      roomName: '정인',
      roomId: 5,
      roomPassword: '',
      roomPersonCount: '1',
      roomLevel: ['중수'],
    },
    {
      roomName: '예에',
      roomId: 6,
      roomPassword: '',
      roomPersonCount: '3',
      roomLevel: ['고수'],
    },
    {
      roomName: '스크롤되나?',
      roomId: 7,
      roomPassword: 'asdasd',
      roomPersonCount: '6',
      roomLevel: ['중수'],
    },
    {
      roomName: '된스다',
      roomId: 8,
      roomPassword: '',
      roomPersonCount: '1',
      roomLevel: ['중수', '고수'],
    },
    {
      roomName: '진마짜',
      roomId: 9,
      roomPassword: '',
      roomPersonCount: '2',
      roomLevel: ['중수'],
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
