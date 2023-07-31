import Modal, { ModalBackground, ModalBody } from 'components/modal/Modal.style';
import { styled } from 'styled-components';
import { theme } from '../../styles/theme';
const fontUrl = 'https://fonts.googleapis.com/css2?family=Dokdo&family=Gasoek+One&display=swap';
// 새로운 <link> 태그 생성
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = fontUrl;
// 새로운 <link> 태그 생성

export const RoomMakeBackground = styled(ModalBody)`
  background-color: ${theme.color.darkgray};
  width: 100%;
  height: 100%;
`;

export const MakeRoomButton2 = styled.button`
  background-image: linear-gradient(to bottom, red, pink);
  font-size: 30px;
  font-family: 'Dokdo', cursive;
  border: 4px solid red;
  border-radius: 7px;
  text-align: center;
`;

export const LevelCheckDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-left: 40%;
  margin-right: 40%;
`;

export const CheckText = styled.text`
  /* font: italic small-caps bold 16px/2 cursive; */
  word-break: keep-all;
  font-family: 'Gasoek One', sans-serif;
  color: green;
`;

export const InputBar = styled.input`
  font-size: 25px;
  background: white;
  border-radius: 10px;
  text-align: center;
  border: 1px solid black;
  font-family: 'Gasoek One', sans-serif;
  width: 300px;
  height: 45px;
  border-radius: 10px;
  border: 2px solid var(--main-color);
  box-shadow: 4px 4px var(--main-color);
  font-size: 16px;
  font-weight: 600;
  color: var(--font-color);
  padding: 5px 10px;
  outline: none;
`;

export const RoomDiv = styled.div`
  font-size: 20px;
  margin: 0 auto;
  color: #a164a1;
  font-family: 'Gasoek One', sans-serif;
`;

export const CheckBox1 = styled.input`
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 2px;
  appearance: none;
  background-color: #bbb;
  transition: all 0.3s;

  ::before {
    content: '';
    position: absolute;
    border: solid #fff;
    display: block;
    width: 0.3em;
    height: 0.6em;
    border-width: 0 0.2em 0.2em 0;
    z-index: 1;
    opacity: 0;
    right: calc(50% - 0.3em);
    top: calc(50% - 0.6em);
    transform: rotate(0deg);
    transition: all 0.3s;
    transform-origin: center center;
  }

  :checked {
    animation: a 0.3s ease-in forwards;
    background-color: rgb(120, 190, 120);
  }

  :checked::before {
    opacity: 1;
    transform: rotate(405deg);
  }
`;

// 체크박스 커스텀

export const CheckboxLabel = styled.label`
  padding: 1rem 1rem;
  border-radius: 10rem;
  /* background-color: white; */
  font-size: 1.5rem;

  color: red;
  font-family: 'Gasoek One', sans-serif;
`;
