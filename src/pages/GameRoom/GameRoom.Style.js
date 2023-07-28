import styled from 'styled-components';

export const ScreenWrapper = styled.div`
  width: 80vw;
  height: 80vh;

  position: absolute;
  left: 10%;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
`;

export const PreVideoArea = styled.div`
  padding: 10px;
  text-align: center;
`;
