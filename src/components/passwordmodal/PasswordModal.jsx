// import Modal from 'components/modal/Modal';
import * as S from 'components/passwordmodal/PasswordModal.Style';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import gameAPI from 'apis/gameAPI';
import MakeRoomModal from 'components/makeroommodal/MakeRoomModal';
import { isEmptyStatement } from '@babel/types';
import { useNavigate } from 'react-router';

function PasswordModal({ item }) {
  return (
    <div>
      <S.RoomMakeBackground>
        <PasswordInput item={item}></PasswordInput>
      </S.RoomMakeBackground>
    </div>
  );
}

function PasswordInput({ item }) {
  const navigate = useNavigate();
  // 방 비번 입력
  const enterRoom = (sessionId) => {
    navigate(`/waitingroom/${sessionId}`, {
      state: {
        password,
      },
    });
  };
  const [password, setPassword] = React.useState('');
  const savePassword = (item) => {
    setPassword(item.target.value);
    console.log('입력한 패스워드', password);
  };

  const checkPassword = () => {
    if (item.password === password) {
      console.log('비번맞아요');
      enterRoom(item.name);
    } else {
      alert('비밀번호가 틀렸습니다.');
    }

    const makeRoomPost = () => {
      const data = {};
      const res = gameAPI.enterRoom(data);
      console.log(res);
    };
  };
  return (
    <div>
      <S.PasswordText>비밀번호</S.PasswordText>
      <S.SubmitInput type="password" onChange={savePassword} />
      <br />
      <S.SubmitButton onClick={checkPassword}>입력</S.SubmitButton>
    </div>
  );
}

export default PasswordModal;
