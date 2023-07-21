import Layout from 'components/layout/Layout';
import Modal from 'components/modal/Modal';
import UserInfo from 'components/userinfo/UserInfo';
import useModal from 'hooks/useModal';
import * as S from 'pages/Main/Main.Style';

function Main({ isMain }) {
  const { openModal } = useModal();
  return (
    <Layout isMain={true}>
      <S.KakaoLoginButton onClick={openModal}></S.KakaoLoginButton>
      <Modal>
        <UserInfo />
      </Modal>
    </Layout>
  );
}

export default Main;
