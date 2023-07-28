import useModal from 'hooks/useModal';
import * as S from './Header.Style';
import { HiQuestionMarkCircle, HiOutlineUserCircle } from 'react-icons/hi';
import UserInfo from 'components/userinfo/UserInfo';
import Modal from 'components/modal/Modal';

function Header() {
  const { openModal } = useModal('UserInfo');

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
        <HiQuestionMarkCircle size={'70%'} color="#828282" />
        <HiOutlineUserCircle size={'70%'} color="#828282" onClick={openModal} />
        <Modal id="UserInfo">
          <UserInfo />
        </Modal>
      </S.HeaderButtonList>
    </S.HeaderWrapper>
  );
}
export default Header;
