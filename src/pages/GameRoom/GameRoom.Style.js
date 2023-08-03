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

export const TimeHeader = styled.div`
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  color: ${(props) => (props.layout.Day ? 'black' : 'white')};
`;

export const TimeIcon = styled.img`
  width: 30px;
  height: 30px;
  display: inline;
`;
export const LeftTime = styled.div`
  display: inline;
`;

export const DayText = styled.div`
  margin-top: 10px;
`;
