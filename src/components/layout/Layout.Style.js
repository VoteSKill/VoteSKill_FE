import styled from 'styled-components';

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
    to top,
    ${(props) => (props.$isNight ? props.theme.night.start : props.theme.day.start)},
    ${(props) => (props.$isNight ? props.theme.night.end : props.theme.day.end)} 80%
  );
`;

export const BackgroundImage = styled.img`
  width: 100vw;
  position: fixed;
  bottom: 0;
`;

export const MainLogo = styled.img`
  position: absolute;
  width: 500px;
  height: 210px;
  top: 18%;
  left: 35%;
  filter: drop-shadow(1px 2px 10px #000);
`;
