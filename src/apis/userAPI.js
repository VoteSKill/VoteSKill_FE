import { axiosInstance, loginInstance } from 'apis';

const userAPI = {
  signup: (nickname) => axiosInstance.post('/users', { nickname }),

  logout: () => axiosInstance.post('/out'),

  kakaoLogin: (code) =>
    loginInstance.get('/oauth/kakao/callback', {
      params: {
        code: code,
      },
    }),

  checkId: (username) =>
    loginInstance.get('/users/check', {
      params: {
        username,
      },
    }),

  getUserInfo: (userId) => axiosInstance.get(`/users/${userId}`),

  editUserInfo: (userId) => axiosInstance.put(`/users/${userId}`),
};

export default userAPI;
