import { styled } from 'styled-components';

export const Chat = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 20px;
`;

export const ChattingContainer = styled.div`
  height: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.s};
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.2);
`;
export const ChattingDivider = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${({ myMessage }) => (myMessage ? 'end' : 'start')};
`;

export const MessageBox = styled.div`
  margin: 10px 0;
  max-width: 40%;
  padding: 10px;
  overflow-wrap: break-word;
  text-align: ${({ myMessage }) => (myMessage ? 'end' : 'start')};
  background-color: ${({ theme, myMessage }) => (myMessage ? theme.color.gray : theme.color.lightgray)};
  color: ${({ theme, myMessage }) => (myMessage ? theme.color.lightgray : theme.color.gray)};
  border-radius: ${({ theme }) => theme.borderRadius.s};
  box-shadow: 1px 1px 2px black;
`;

export const BottomBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const InputBar = styled.input`
  padding: 10px;
  font-size: 16px;
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.s};
  width: 90%;
`;

export const SendButton = styled.button`
  padding: 20px 10px;
  background-color: ${({ theme }) => theme.color.lightgray};
  border-radius: 10px;
`;

// export const StartButton = styled.button`
//   background: #1aab8a;
//   color: #fff;
//   border: none;
//   position: relative;
//   height: 60px;
//   font-size: 1.6em;
//   padding: 0 2em;
//   cursor: pointer;
//   transition: 800ms ease all;
//   outline: none;

//   &:hover {
//     background: #fff;
//     color: #1aab8a;
//   }

//   &:before,
//   &:after {
//     content: '';
//     position: absolute;
//     top: 0;
//     right: 0;
//     height: 2px;
//     width: 0;
//     background: #1aab8a;
//     transition: 400ms ease all;
//   }

//   &:after {
//     right: inherit;
//     top: inherit;
//     left: 0;
//     bottom: 0;
//   }

//   &:hover:before,
//   &:hover:after {
//     width: 100%;
//     transition: 800ms ease all;
//   }
// `;
