import { styled, keyframes } from 'styled-components';

const gradientAnimation = keyframes`
  0% {
    left: -100%;
  }
  50%, 100% {
    left: 100%;
  }
`;
export const Total = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-left: 200px;
`;
export const Square = styled.div`
  /* height: 100vh;  */
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  column-gap: 50px;
  row-gap: 30px;
  padding: 20px;
`;

export const Container = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  justify-content: center;
`;

export const ButtonSquare = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  column-gap: 50px;
  row-gap: 30px;

  padding: 20px;
`;

// 강퇴버튼
export const DropButton = styled.button`
  box-shadow: inset 0px 1px 0px 0px #f5978e;
  background: linear-gradient(to bottom, #ededed 5%, #dfdfdf 100%);
  background-color: #ededed;
  border-radius: 6px;
  border: 1px solid #d02718;
  display: inline-block;
  cursor: pointer;
  color: black;
  font-family: Arial;
  font-size: 13px;
  font-weight: bold;
  padding: 3px 10px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #810e05;

  &:hover {
    background: linear-gradient(to bottom, #c62d1f 5%, #f24537 100%);
    background-color: #c62d1f;
  }
  &:active {
    position: relative;
    top: 1px;
  }
`;
// 나가기버튼
export const OutButton = styled.button``;

export const StartButton = styled.button`
  height: 150px;
  margin-top: 30px;
  background: #ff4742;
  /* border: 1px solid #ff4742; */
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: nunito, roboto, proxima-nova, 'proxima nova', sans-serif;
  font-size: 55px;
  font-weight: 800;
  line-height: 16px;
  min-height: 40px;
  text-align: center;
  text-rendering: geometricprecision;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  &:hover,
  &:active {
    background: #03e9f4;
    color: #050801;
    box-shadow:
      0 0 5px #03e9f4,
      0 0 25px #03e9f4,
      0 0 50px #03e9f4,
      0 0 100px #03e9f4;
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
  }

  &:active {
    opacity: 0.5;
  }
`;
/* position: relative;
  width: 100px;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 8vh;
  overflow: hidden;
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  transition: 0.5s;
  letter-spacing: 1px;
  border-radius: 8px;
  border: 5px solid #000;
  background-color: red; */

/*   
  position: relative;
  display: inline-block;
  padding: 25px 30px;
  margin: 40px 0;
  color: #03e9f4;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.5s;
  letter-spacing: 4px;
  overflow: hidden;
  margin-right: 50px;

  &:hover {
    background: #03e9f4;
    color: #050801;
    box-shadow:
      0 0 5px #03e9f4,
      0 0 25px #03e9f4,
      0 0 50px #03e9f4,
      0 0 200px #03e9f4;
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
  }

  span {
    position: absolute;
    display: block;
  }

  span:nth-child(1) {
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #03e9f4);
    animation: ${gradientAnimation} 1s linear infinite;
  }
`; */
export const Logo = styled.img`
  height: 200px;
`;
