import userAPI from 'apis/userAPI';
import Layout from 'components/layout/Layout';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { setCookie } from 'utils/cookie';

function KakaoLogin() {
  const navigate = useNavigate();
  const navigateUser = (data) => {
    if (data.nickName === '') navigate('/signin');
    else if (data.nickName.length > 0) location.replace('/lobby');
  };

  useEffect(() => {
    const getToken = async () => {
      const code = new URL(window.location.href).searchParams.get('code');
      const { data, status } = await userAPI.kakaoLogin(code);
      if (status !== 200) {
        throw new Error('Login Error');
      }
      setCookie('accessToken ', data.ownJwtAccessToken);
      setCookie('refreshToken ', data.ownJwtRefreshToken);
      navigateUser(data);
    };
    getToken();
  }, []);

  return <Layout isMain={true}></Layout>;
}

export default KakaoLogin;
