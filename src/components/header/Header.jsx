import useModal from 'hooks/useModal';
import * as S from './Header.Style';
import { HiQuestionMarkCircle, HiOutlineUserCircle } from 'react-icons/hi';
import UserInfo from 'components/userinfo/UserInfo';
import JobIntroduce from 'components/jobintroduce/JobIntroduce';
import Modal from 'components/modal/Modal';
import { useEffect, useState } from 'react';

function Header() {
  const [nickname, setNickname] = useState('');
  const { openModal: openUserInfo } = useModal('UserInfo');
  const { openModal: openJobIntroduceModal } = useModal('JobIntroduce');

  useEffect(() => {
    setNickname(sessionStorage.getItem('nickname'));
  }, [nickname]);

  return (
    <S.HeaderWrapper>
      <S.Logo src={process.env.PUBLIC_URL + '/image/logo.svg'} />
      <S.HeaderButtonList>
        <HiQuestionMarkCircle size={'70%'} color="#828282" onClick={openJobIntroduceModal} />
        <HiOutlineUserCircle size={'70%'} color="#828282" onClick={openUserInfo} />
        <Modal id="UserInfo">
          <UserInfo nickname={nickname} />
        </Modal>
        <Modal id="JobIntroduce">
          <JobIntroduce />
        </Modal>
      </S.HeaderButtonList>
    </S.HeaderWrapper>
  );
}
export default Header;
