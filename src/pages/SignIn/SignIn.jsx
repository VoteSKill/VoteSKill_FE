import React, { useState } from 'react';
import Layout from 'components/layout/Layout';
import * as S from 'pages/SignIn/SignIn.Style';

function SignIn() {
  const [placeholder, setPlaceholder] = useState('닉네임을 입력하세요.');
  const [isHovering, setIsHovering] = useState(false);

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
  const handleClick = () => {
    window.location.href = 'lobby';
  };

  return (
    <Layout isMain={true}>
      <S.SignInDiv>
        <S.Textarea placeholder={placeholder} onFocus={handleFocus} onBlur={handleBlur}></S.Textarea>
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
