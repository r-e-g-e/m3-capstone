import styled from "styled-components";

export const Container = styled.div`
  height: 75px;
  background: var(--verde-claro);
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  padding: 10px;

  @media (min-width: 600px) {
    height: 100px;
    align-items: center;
  }
`;
