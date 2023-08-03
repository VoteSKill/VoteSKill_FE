import useModal from 'hooks/useModal';
import * as S from './Header.Style';
import { HiQuestionMarkCircle, HiOutlineUserCircle } from 'react-icons/hi';
import UserInfo from 'components/userinfo/UserInfo';
import JobIntroduce from 'components/jobintroduce/JobIntroduce';
import Modal from 'components/modal/Modal';
import { useState } from 'react';

function Header() {
  const { openModal: openUserInfo } = useModal('UserInfo');
  const { openModal: openJobIntroduceModal } = useModal('JobIntroduce');

  // 로고 클릭시 이동
  // const navigate = useNavigate();

  // const navigateTo = (props) => {
  //   console.log(props.isSign);
  //   if (props.isSign) {
  //     navigate('/lobby');
  //   } else {
  //     navigate('/');
  //   }
  // };

  return (
    <S.HeaderWrapper>
      <S.Logo src={process.env.PUBLIC_URL + '/image/logo.svg'} />
      <S.HeaderButtonList>
        <HiQuestionMarkCircle size={'70%'} color="#828282" onClick={openJobIntroduceModal} />
        <HiOutlineUserCircle size={'70%'} color="#828282" onClick={openUserInfo} />
        <Modal id="UserInfo">
          <UserInfo />
        </Modal>
        <Modal id="JobIntroduce">
          <JobIntroduce />
        </Modal>
      </S.HeaderButtonList>
    </S.HeaderWrapper>
  );
}
export default Header;
