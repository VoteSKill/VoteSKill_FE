import axiosInstance from 'apis';

const userAPI = {
  signup: (nickname) => axiosInstance.post('/users/sign-up', { nickname }),

  logout: () => axiosInstance.post('/out'),

  kakaoLogin: (code) =>
    axiosInstance.get('/oauth/kakao/callback', {
      params: {
        code: code,
      },
    }),

  checkId: (username) =>
    axiosInstance.get('/users/check', {
      params: {
        username,
      },
    }),

  getUserInfo: (userId) => axiosInstance.get(`/users/${userId}`),

  editUserInfo: (userId) => axiosInstance.put(`/users/${userId}`),
};

export default userAPI;
