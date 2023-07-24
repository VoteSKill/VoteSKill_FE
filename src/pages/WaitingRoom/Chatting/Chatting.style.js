import { styled } from 'styled-components';

export const Chat = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const SendContainer = styled.div`
  margin: 30px;
  padding: 30px;
  background-color: green;
  flex: 95%;
`;

export const BottomBar = styled.div`
  flex: 5%;
  display: flex;
  width: 100%;
  margin: 10px;
  padding: 10px;
  justify-content: space-between;
`;

export const InputBar = styled.input`
  font-size: 20px;
  background: white;
  border-radius: 10px;
  width: 90%;

  border: 1px solid black;
`;

export const SendButton = styled.button`
  flex: 10%;
  background-color: ${({ theme }) => theme.color.lightgray};

  border-radius: 6px;
`;
