import Modal, { ModalBackground, ModalBody } from 'components/modal/Modal.style';
import { styled } from 'styled-components';
import { theme } from '../../styles/theme';

export const JobIntroduceBackground = styled.div`
  width: 700px;
  height: 400px;
  border-radius: ${(props) => props.theme.borderRadius.s};
  overflow: hidden;
  position: relative;
  /* 다른 스타일들을 여기에 작성하세요 */
  background-color: ${(props) => (props.isRed ? '#ff4742' : props.theme.color.blue)};

  display: flex;
  flex-direction: column;
`;
export const Job = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 70px;
`;

export const JobImg = styled.img`
  width: 500px;
  height: 320px;
  margin-top: 10px;
`;

export const JobIntroduceDiv = styled.div`
  font-size: 10px;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
`;
export const JobName = styled.div`
  font-size: 30px;
  /* margin-top: 100px; */
`;
export const JobDescription = styled.div`
  font-size: 15px;
  margin-top: 60px;
`;
export const ButtonArea = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;
export const ScrollButtonLeft = styled.button`
  width: 32px;
  height: 32px;
  margin-right: 40px;
  background-image: url(${process.env.PUBLIC_URL + '/left.png'});
  background-size: cover;
  display: inline-block;
`;
export const ScrollButtonRight = styled.button`
  width: 32px;
  height: 32px;
  margin-left: 40px;

  background-image: url(${process.env.PUBLIC_URL + '/right.png'});
  background-size: cover;
  display: inline-block;
`;
export const InputArea = styled.div`
  background: black;
  height: 100%;
  padding: 20px 5px 20px 20px;
  margin: 10px;
  font-size: 32px;
  color: white;
  border-radius: 20px;
`;

export const Label = styled.label`
  padding: 5px;
`;

export const NicknameSpan = styled.span`
  display: inline-block;
  width: 250px;
  height: 55.33px;
  padding: 9px 3px 9px 3px;
  margin: 6px;
`;

export const NicknameInput = styled.input`
  display: inline;
  height: 55.33px;
  width: 250px;
  padding: 9px 3px 9px 3px;
  margin: 6px;
`;

export const NicknameFixIcon = styled.button`
  width: 32px;
  height: 32px;
  background-image: url(${process.env.PUBLIC_URL + '/image/userinfo/nickname_fix_icon.svg'});
  background-size: cover;
  display: inline-block;
`;

export const WinRateSpan = styled.span`
  font-size: 32px;
  padding: 9px 3px 9px 3px;
  margin: 6px;
`;

export const BeginnerIcon = styled.label`
  background-color: #4d82c1;
  color: #e4c4c4;
  font-size: 22px;
  display: inline;
  margin: 10px;
  padding: 6px 20px 6px 20px;
  border-radius: 20px;
`;

export const ImmediateIcon = styled.label`
  background-color: #e08d2a;
  color: #e4c4c4;
  font-size: 22px;
  display: inline;
  margin: 10px;
  padding: 6px 20px 6px 20px;
  border-radius: 20px;
`;

export const ExpertIcon = styled.label`
  background-color: #a34747;
  color: #e4c4c4;
  font-size: 22px;
  display: inline;
  margin: 10px;
  padding: 6px 20px 6px 20px;
  border-radius: 20px;
`;
