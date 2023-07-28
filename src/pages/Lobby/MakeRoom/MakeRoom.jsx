import React, { useState } from 'react';
import * as S from 'pages/Lobby/MakeRoom/MakeRoom.Style';
import useModal from 'hooks/useModal';
import MakeRoomModal from 'components/makeroommodal/MakeRoomModal';
import Modal from 'components/modal/Modal';

function MakeRoom() {
  const { openModal } = useModal('MakeRoomModal');

  return (
    <S.Bottom>
      <S.MakeRoomButton onClick={openModal}>방만들기 </S.MakeRoomButton>
      <Modal id="MakeRoomModal">
        <MakeRoomModal />
      </Modal>
    </S.Bottom>
  );
}

export default MakeRoom;

//  못한코드..
// const Items = ['게임중', '초보', '중수', '고수'];
// <S.LevelCheckDiv>
//   {Items.map((item) => (
//     <React.Fragment key={item}>
//       <input type="checkbox" />
//       {item}
//     </React.Fragment>
//   ))}
// </S.LevelCheckDiv>
