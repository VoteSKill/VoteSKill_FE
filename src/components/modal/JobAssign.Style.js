import styled from 'styled-components';

export const JobAssignModalBody = styled.div`
  width: 800px;
  height: 600px;
  background: linear-gradient(
    to top,
    ${(props) =>
      props.layout.Day ? props.theme.day.start : props.layout.Mafia ? props.theme.night.start : props.theme.color.blue},
    ${(props) => (props.layout.Day ? props.theme.day.end : props.theme.night.end)} 80%
  );
`;

export const JobImage = styled.img`
  margin-top: 20px;
  width: 50%;
  height: 70%;
`;

export const JobAssignText = styled.div`
  margin-top: 50px;
  height: 45px;
  font-size: xx-large;
  font-weight: bold;
  text-align: center;
`;
