import useModal from 'hooks/useModal';
import * as S from 'components/vote/Vote.Style';
import { FiXCircle } from 'react-icons/fi';

function Vote() {
  return (
    <div>
      <S.ModalBody>
        <S.VoteImage src={process.env.PUBLIC_URL + '/image/game/killvote.png'}></S.VoteImage>
        <S.VoteComment>마피아는 누구일까요?</S.VoteComment>
        <S.VoteWrapper>
          <S.VoteCheckBox>
            
          </S.VoteCheckBox>
        </S.VoteWrapper>
      </S.ModalBody>
    </div>
  );
}
function Modal({ children }) {
  const { modalToggleState, closeModal } = useModal();

  return (
    <>
      {modalToggleState && (
        <S.ModalBackground>
          <S.ModalBody>
            <S.ModalExitButton>
              <FiXCircle size={30} color="#970000" onClick={closeModal} cursor={'pointer'} />
            </S.ModalExitButton>
            {children}
          </S.ModalBody>
        </S.ModalBackground>
      )}
    </>
  );
}

export default Vote;
