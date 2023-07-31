import Layout from 'components/layout/Layout';
import { KAKAO_AUTH_URL } from 'constants/kakaoLogin';
import * as S from 'pages/Main/Main.Style';

function Main() {
  const loginKakao = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <Layout isMain={true}>
      <S.KakaoLoginButton onClick={loginKakao}></S.KakaoLoginButton>
    </Layout>
  );
}

export default Main;
