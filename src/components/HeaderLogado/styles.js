import styled from "styled-components";

export const Container = styled.div`
  height: 75px;
  background: var(--verde-claro);
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  padding: 10px;

  span {
    display: flex;
    flex-direction: column-reverse;
    margin-top: 10px;
  }

  a {
    color: var(--branco);
    margin-right: 10px;

    :hover {
      color: var(--laranja);
    }
  }

  .foto {
    width: 40px;
    border-radius: 50px;
    align-self: flex-end;
    margin-top: 10px;
  }

  .logo {
    width: 130px;
  }

  @media (min-width: 700px) {
    height: 100px;
    align-items: center;
    div {
    }
    span {
      flex-direction: row;
      width: 220px;
      align-items: center;
    }
    .foto {
      width: 60px;
      margin-bottom: 20px;
    }
    .logo {
      width: 170px;
    }
    a {
      margin-right: 50px;
    }
  }
`;
