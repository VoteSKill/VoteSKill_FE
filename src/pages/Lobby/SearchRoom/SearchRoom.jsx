import React, { useState } from 'react';
import * as S from 'pages/Lobby/SearchRoom/SearchRoom.Style';
import { roomLists } from 'pages/Lobby/RoomList/RoomList';
import { constSelector } from 'recoil';
import useModal from 'hooks/useModal';
import Modal from 'components/modal/Modal';
import axios from 'axios';
import { axiosInstance } from 'apis';
import gameAPI from 'apis/gameAPI';
import SearchMakeRoom from '../SearchMakeRoom/SearchMakeRoom';
import { useQuery } from '@tanstack/react-query';

// 필터링 한 목록을 전달할거임.
function SearchRoom() {
  const handleClick = () => {
    const data = {
      title: nameSearch,
      grade: checkedLevels,
      state: gameCheck,
    };
    console.log(data);

    gameAPI
      .getRoomList(nameSearch, checkedLevels, gameCheck)
      .then((response) => {
        // API 호출 결과를 처리합니다.
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const { data } = useQuery('roomList', () => gameAPI.getRoomList(nameSearch, checkedLevels, gameCheck));

  // const res = useQuery({
  // queryKey: ['persons'],
  // queryFn: () => axios.post('http://localhost:8080/rooms'),
  // update: (data) => axios.post('http://localhost:8000/rooms', data), //update 시킬 함수 추가
  // });
  // 체크박스 상태관리
  // 체크박스 상태관리
  const checkLists = ['초보', '중수', '고수'];
  const [nameSearch, setNameSearch] = useState('');
  const [checkedLevels, setCheckedLevels] = useState([]);
  const gaming = '게임중';
  const [gameCheck, setGameCheck] = useState('');
  const checkHandled = (e) => {
    const level = e.target.id;
    console.log(e.target.id);
    if (e.target.checked) {
      setCheckedLevels((prev) => [...prev, level]);
    } else {
      setCheckedLevels((prev) => prev.filter((item) => item !== level));
    }
  };
  const gamecheckHandled = (e) => {
    const { checked } = e.target;
    if (checked) {
      setGameCheck(gaming);
    } else {
      setGameCheck('');
    }
  };
  // 원하는 방 제목 입력했을 때 방 필터링

  return (
    <>
      <div>
        <S.SearchBarWrapper>
          <S.SearchInput
            type="search" // 치고 지우고 싶을 때 x표시
            autoComplete="off" //자동완성
            required
            onChange={(e) => setNameSearch(e.target.value)}
          />
        </S.SearchBarWrapper>
        <button
          style={{ backgroundColor: 'yellow' }}
          onClick={handleClick}
          //   const data = {
          //     title: nameSearch,
          //     grade: checkedLevels,
          //     state: 'asd',
          //   };
          //   console.log(data);
          //   return false;
          // }}
        >
          검색
        </button>

        <div style={{ lineHeight: '30%' }}>
          <br />
        </div>
      </div>
      {data && <SearchMakeRoom data={data} />}

      <S.CheckBoxWrapper>
        <S.CheckBoxInput type="checkbox" id={gaming} onChange={(e, item) => gamecheckHandled(e, item)} />
        <S.CheckboxLabel htmlFor={gaming} onClick={(gaming) => gamecheckHandled(gaming)}>
          {gaming}
        </S.CheckboxLabel>
        &nbsp;{/* 띄어쓰기 */}
      </S.CheckBoxWrapper>

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
    </>
  );
}

export default SearchRoom;
