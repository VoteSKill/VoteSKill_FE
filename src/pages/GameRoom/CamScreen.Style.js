import styled from 'styled-components';
import { theme } from 'styles/theme';

export const CamScreen = styled.div`
  border-radius: ${theme.borderRadius.l};
  width: 190px;
  height: 190px;
`;

export const CustomScreen = styled.video`
  border-radius: 50%;
`;

export const JoinInput = styled.input`
  border-radius: 20px;
  border: 3px solid black;
  padding: 5px;
  font-size: large;
`;

export const VoteImage = styled.img`
  width: 250px;
  height: 250px;
  position: fixed;
`;
