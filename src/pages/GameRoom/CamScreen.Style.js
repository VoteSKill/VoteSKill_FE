import styled from 'styled-components';
import { theme } from 'styles/theme';

export const CamScreen = styled.div`
  border-radius: ${theme.borderRadius.l};

  width: 100%;
  height: 100%;
`;

export const CustomScreen = styled.video`
  border-radius: ${theme.borderRadius.s};
`;

export const JoinInput = styled.input`
  border-radius: 20px;
  border: 3px solid black;
  padding: 5px;
  font-size: large;
`;
