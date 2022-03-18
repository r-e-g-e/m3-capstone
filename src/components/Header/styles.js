import styled from "styled-components";

export const Container = styled.div`
  height: 75px;
  background: var(--verde-claro);
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  padding: 10px;

  .logo {
    width: 130px;
  }

  button {
    display: none;
  }

  @media (min-width: 700px) {
    height: 100px;
    align-items: center;

    button {
      display: unset;
    }

    .logo {
      width: 170px;
    }
  }
`;
