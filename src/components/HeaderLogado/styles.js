import styled from "styled-components";

export const Container = styled.div`
  height: 75px;
  background: var(--verde-claro);
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  padding: 10px;

  a {
    color: var(--branco);
    margin-right: 50px;

    :hover {
      color: var(--laranja);
    }
  }

  .foto {
    width: 50px;
    border-radius: 50px;
  }

  @media (min-width: 700px) {
    height: 100px;
    align-items: center;
  }
`;
