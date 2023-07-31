import styled from 'styled-components';

export const KakaoLoginButton = styled.button`
  background-image: url(${process.env.PUBLIC_URL + '/image/login/kakao_login.svg'});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 200px;
  height: 50px;
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
