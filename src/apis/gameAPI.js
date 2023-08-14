import { axiosInstance } from 'apis';

const gameAPI = {
  setRoom: (roomData) => axiosInstance.post('/api/sessions', roomData),

  enterRoom: (roomId, password) => axiosInstance.post(`/api/sessions/${roomId}/connections`, { password }),

  getRoomList: (title, grade, state) =>
    axiosInstance.get('/api/sessions', {
      params: {
        title,
        grade,
        state,
      },
    }),

  exitRoom: (roomId) => axiosInstance.delete(`/rooms/${roomId}`),

  dropUser: (roomId, userId) => axiosInstance.delete(`/rooms/${roomId}/${userId}`),

  startGame: (roomId) => axiosInstance.post(`/rooms/${roomId}/start`),

  voteGame: (roomId, userId) =>
    axiosInstance.post(`/rooms/${roomId}/vote`, {
      params: {
        target: userId,
      },
    }),

  useSkill: (roomId, userId) => axiosInstance.post(`/rooms/${roomId}/skill/${userId}`),
};
export default gameAPI;
