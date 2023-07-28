import useModal from 'hooks/useModal';
import * as S from 'components/modal/Modal.style';
import { FiXCircle } from 'react-icons/fi';

function Modal({ children }) {
  const { modalToggleState, closeModal } = useModal();

  return (
    <>
      {modalToggleState && (
        <>
          <S.ModalBackground>
            <S.ModalBody>
              <S.ModalExitButton>
                <FiXCircle size={30} color="#970000" onClick={closeModal} cursor={'pointer'} />
              </S.ModalExitButton>
              {children}
            </S.ModalBody>
          </S.ModalBackground>
        </>
      )}
    </>
  );
}

export default Modal;
