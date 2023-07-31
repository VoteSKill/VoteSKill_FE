import Modal from 'components/modal/Modal';
import * as S from 'components/makeroommodal/MakeRoomModal.Style';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
function MakeRoomModal() {
  return (
    <div>
      <S.RoomMakeBackground>
        <SelectRoomName></SelectRoomName>
      </S.RoomMakeBackground>
    </div>
  );
}

function SelectRoomName() {
  // axios 방 생성
  const API = axios.create({
    baseURL: 'http://localhost:3000',
  });

  // 방 제목 입력
  const [roomNameInput, setRoomNameInput] = React.useState('');

  // 방 비번 입력
  const [roomPasswordInput, setRoomPasswordInput] = React.useState('');

  // 방 레벨 입력
  const [levels, setLevels] = React.useState(new Set());

  // 비번방 체크
  const checkLists = ['암호방'];
  const [boxChecked, setboxChecked] = React.useState(false);

  // 암호방 체크했으면 콜백으로 처리
  const handleCheckboxChange = () => {
    setboxChecked((boxChecked) => {
      const updatedBoxChecked = !boxChecked;
      if (!updatedBoxChecked) {
        setRoomPasswordInput('');
      }
      return updatedBoxChecked;
    });
  };
  const roomNameInfo = (event) => {
    setRoomNameInput(event.target.value);
    console.log(event.target.value);
  };
  const roomPassInfo = (event) => {
    setRoomPasswordInput(event.target.value);
  };
  const saveRoomInfo = (event) => {
    setRoomNameInput(event.target.value);
    setRoomPasswordInput(event.target.value);
  };

  // 비번방 체크박스 처리
  const [lockState, setLockState] = React.useState(false);

  const lockClick = () => {
    setLockState(true);
  };

  const onClick = () => {
    // console.log(lockClickCalled);
    const requestData = {
      roomname: roomNameInput,
      roompassword: roomPasswordInput,
      lockState: lockState.value, // 업데이트된 lockState 값을 사용합니다.
      // levels: roomLevels,
    };
    console.log(requestData);
    // window.location.href = 'waitingroom';

    // // 방 정보 백엔드로 보내기
    // axios
    //   .post('http://localhost:8000/rooms', requestData)
    //   .then((response) => {
    //     // 요청이 성공한 경우에 실행되는 부분
    //     console.log(response.data);
    //     window.location.href = 'waitingroom';
    //   })
    //   .catch((error) => {
    //     // 요청이 실패한 경우에 실행되는 부분
    //     console.error(error);
    //   });
  };
  return (
    <div>
      <br />
      <br />
      <S.RoomDiv>방 이름</S.RoomDiv>
      <br />
      <S.InputBar onChange={roomNameInfo}></S.InputBar>
      <br />
      <br />

      {/* 비밀번호 및 암호 체크 */}
      <S.RoomDiv>
        비밀번호
        <br />
        <S.CheckboxLabel>암호방</S.CheckboxLabel>
        <input
          type="checkbox"
          checked={boxChecked}
          onChange={handleCheckboxChange}
          onClick={(item) => lockClick(item)}
        />
        <br />
        <S.InputBar
          type="password"
          id="password"
          name="password"
          className="input-pw"
          onChange={roomPassInfo}
          disabled={!boxChecked}
          placeholder="패스워드를 입력하세요"
        ></S.InputBar>
      </S.RoomDiv>

      {/* Level 체크박스 */}
      <br />
      <S.LevelCheckDiv>
        <input type="checkbox" id={1} />
        <S.CheckText>초보</S.CheckText>
        <input type="checkbox" id={2} />
        <S.CheckText>중수</S.CheckText>
        <input type="checkbox" id={3} />
        <S.CheckText>고수</S.CheckText>
        <br />
        <br />
      </S.LevelCheckDiv>
      <br />
      <br />
      <S.MakeRoomButton2 onClick={() => onClick()}>방 생성 </S.MakeRoomButton2>
      <br />
      <br />
    </div>
  );
}

export default MakeRoomModal;
