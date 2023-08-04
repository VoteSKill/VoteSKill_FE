import { useState } from 'react';
import { useLocation } from 'react-router';
import Layout from 'components/layout/Layout';
import userAPI from 'apis/userAPI';
import * as S from 'pages/SignIn/SignIn.Style';

function SignIn() {
  const [placeholder, setPlaceholder] = useState('닉네임을 입력하세요.');
  const [isHovering, setIsHovering] = useState(false);
  const [nickName, setNickName] = useState('');

  const signinToken = useLocation();
  const token = signinToken.state;

  const handleFocus = () => {
    setPlaceholder('');
  };

  const handleBlur = () => {
    setPlaceholder('닉네임을 입력하세요.');
  };

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  // 닉네임 저장
  const handleNickNameChange = (event) => {
    setNickName(event.target.value);
  };

  const validateNickName = (nickName) => {
    const nickNameLength = nickName.trim().length;
    if (nickNameLength === 0) {
      alert('닉네임을 입력하세요');
      return false;
    } else if (nickNameLength < 3 || nickNameLength > 6) {
      alert('닉네임은 3자 이상 6자 이하압니다.');
      return false;
    }
    return true;
  };

  const handleClick = async () => {
    if (validateNickName(nickName)) {
      const { data } = await userAPI.signup(nickName, token);
      console.log(data);
      if (data.status === 200) {
        location.replace('/lobby');
      } else if (data.status === 400) {
        alert('중복된 닉네임입니다.');
      }
    }
  };

  return (
    <Layout isMain={true}>
      <S.SignInDiv>
        <S.NickName
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleNickNameChange}
        ></S.NickName>
        <S.Button $grow={isHovering} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={handleClick}>
          Go To KILL
        </S.Button>
      </S.SignInDiv>
    </Layout>
  );
}

export default SignIn;
