import React, { useEffect, useState } from 'react';
import * as S from 'pages/Lobby/SearchMakeRoom/SearchMakeRoom.Style';
import { constSelector, useSetRecoilState, useRecoilValue } from 'recoil';
import { responseData } from 'recoil/atoms/lobbyState';
import useModal from 'hooks/useModal';
import Modal from 'components/modal/Modal';
import PasswordModal from 'components/passwordmodal/PasswordModal';
import { colors } from '@mui/material';

function SearchMakeRoom() {
  // 데이터 불러오기
  const allData = useRecoilValue(responseData);
  const roomPasswords = allData.map((item) => item.roomPassword);

  // 체크박스 상태관리
  const checkLists = ['초보', '중수', '고수'];
  const [nameSearch, setNameSearch] = useState('');
  const [checkedLevels, setCheckedLevels] = useState([]);

  const checkHandled = (e) => {
    const level = e.target.id;
    console.log(e.target.id);
    if (e.target.checked) {
      setCheckedLevels((prev) => [...prev, level]);
    } else {
      setCheckedLevels((prev) => prev.filter((item) => item !== level));
    }
  };

  // 방 필터링하기
  const [filteredRooms, setFilteredRooms] = useState(allData);
  const [filteredLevel, setfilteredLevel] = useState(allData);
  const [passwordInput, setPasswordInput] = useState('');
  const { openModal } = useModal('PasswordModal');
  const [roomNumber, setRoomNumber] = useState('');
  const handleItemClick = (item) => {
    const selectedRoomData = allData.find((value) => value.roomName === item);
    const selectedRoomId = selectedRoomData.roomId;
    setRoomNumber(selectedRoomId);
    if (roomPasswords[selectedRoomId] === '') {
      // 비밀번호가 없는 경우
      console.log('룸넘버', selectedRoomId, '비번없음');
      // window.location.href = `waitingroom/${selectedRoomId}`;
    } else {
      // 비밀번호가 있는 경우
      console.log('룸넘버', selectedRoomId, '비번있음');
      openModal();
    }
  };

  // 원하는 방 제목 입력했을 때 방 필터링
  const filterRooms = (nameSearch) => {
    // 입력하는 글자 포함하면 필터링 됨
    const filteredRooms = allData.filter((item) => item.roomName.includes(nameSearch));
    if (!nameSearch) {
      return allData;
    }
    setFilteredRooms(filteredRooms);
  };

  // 원하는 레벨 체크했을 때 방 필터링

  const filterLevels = (filteredData) => {
    if (checkedLevels.length === 0) {
      return filteredData;
    }
    const filterLevels = filteredData.filter((item) => item.roomLevel.some((level) => checkedLevels.includes(level)));
    setfilteredLevel(filterLevels);
    return filterLevels;
  };

  useEffect(() => {
    const filteredData = filterLevels(filterRooms());

    // filterRooms(filterLevels());
    setFilteredRooms(filteredData);
  }, [nameSearch, checkedLevels]);

  return (
    <>
      {/* 방제목 InputBar */}
      <div>
        <S.SearchBarWrapper>
          <S.SearchInput
            type="search" // 치고 지우고 싶을 때 x표시
            autoComplete="off" //자동완성
            required
            onChange={(e) => filterRooms(e.target.value)}
          />
        </S.SearchBarWrapper>
        <div style={{ lineHeight: '30%' }}>
          <br />
        </div>
      </div>

      {/* Level 체크박스 */}

      {/* <br /> */}
      {checkLists.map((item, index) => (
        <S.CheckBoxWrapper key={item}>
          <S.CheckBoxInput type="checkbox" id={item} name="level" onChange={(e, item) => checkHandled(e, item)} />
          <S.CheckboxLabel htmlFor={item} onClick={(item) => checkHandled(item)}>
            {item}
          </S.CheckboxLabel>
          &nbsp;{/* 띄어쓰기 */}
        </S.CheckBoxWrapper>
      ))}
      <div style={{ lineHeight: '100%' }}>
        <br />
      </div>

      {/* 방 목록 및 인원수, 잠금상태 */}
      <S.RoomSquare>
        {filteredRooms.map((item) => (
          <S.RoomContainer
            key={item.roomId}
            onClick={() => {
              handleItemClick(item.roomName);
            }}
            style={{
              backgroundImage: 'linear-gradient(to top, red, yellow)',
              border: '7px solid black',
              borderRadius: '30px',
              textAlign: 'center',
              fontFamily: 'Dokdo',
              fontSize: '25px',
            }}
          >
            {item.roomName}
            <S.People style={{ textAlign: 'center' }}>
              {item.roomPersonCount}/6 {item.roomPassword && <S.Logo src={process.env.PUBLIC_URL + '/lock_logo.png'} />}
            </S.People>
          </S.RoomContainer>
        ))}
      </S.RoomSquare>

      {/* useState해서 방 index props로 넘겨주는 거 만들기 */}
      <Modal id="PasswordModal">
        <PasswordModal roomNumber={roomNumber} />
      </Modal>
    </>
  );
}

export default SearchMakeRoom;
