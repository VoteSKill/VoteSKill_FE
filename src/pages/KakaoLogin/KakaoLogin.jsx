import userAPI from 'apis/userAPI';
import Layout from 'components/layout/Layout';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { setCookie } from 'utils/cookie';

function KakaoLogin() {
  const navigateUser = (data) => {
    setCookie('accessToken ', data.ownJwtAccessToken);
    if (data.user) {
      setCookie('refreshToken ', data.ownJwtRefreshToken);
      sessionStorage.setItem('nickname', data.nickName);
      location.replace('/lobby');
    } else {
      location.replace('/signin');
    }
  };

  useEffect(() => {
    const getToken = async () => {
      const code = new URL(window.location.href).searchParams.get('code');
      const { data } = await userAPI.kakaoLogin(code);
      if (data) navigateUser(data);
    };

    getToken();
  }, []);

  return <Layout isMain={true}></Layout>;
}

export default KakaoLogin;
