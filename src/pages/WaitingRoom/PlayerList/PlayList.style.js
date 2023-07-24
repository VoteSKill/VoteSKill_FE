import { styled } from 'styled-components';

export const Square = styled.div`
  width: 50%;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  column-gap: 40px;
  row-gap: 40px;
  padding: 40px;
`;

export const Container = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const OutButton = styled.button`
  background-color: ${({ theme }) => theme.color.lightgray};
  font-size: 11px;
  padding: 0.3em 0.5em;
  border-radius: 6px;
`;
