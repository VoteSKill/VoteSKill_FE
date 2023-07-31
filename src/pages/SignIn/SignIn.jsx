import React, { useState } from 'react';
import Layout from 'components/layout/Layout';
import * as S from 'pages/SignIn/SignIn.Style';
import axios from 'axios';

function SignIn() {
  const [placeholder, setPlaceholder] = useState('닉네임을 입력하세요.');
  const [isHovering, setIsHovering] = useState(false);
  const [nickName, setNickName] = useState('');

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

  const handleClick = () => {
    if (nickName.trim() === '') {
      // 조건추가필요 ( 닉네임 중복 여부)
      alert('닉네임을 입력하세요. alert창디자인@');
    } else {
      // // 닉네임 백엔드로 보내기
      // axios
      // .post('http://localhost:8000/users/check', { username: nickName })
      //   .then((response) => {
      //     // 요청이 성공한 경우에 실행되는 부분
      //     console.log(response.data);
      //     window.location.href = 'lobby';
      //   })
      // .catch((error) => {
      //     // 요청이 실패한 경우에 실행되는 부분
      //     console.error(error);
      // alert(error)
      //   });
      window.location.href = 'lobby';
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
        <br />
        <S.Button
          type="submit"
          className={isHovering ? 'grow' : ''}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={handleClick}
        >
          Go To KILL.
        </S.Button>
      </S.SignInDiv>
    </Layout>
  );
}

export default SignIn;
