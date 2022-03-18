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
    margin-top: 10px;
    align-items: flex-end;
  }

  div {
    margin-bottom: 5px;
  }

  a {
    color: var(--branco);
    margin-right: 10px;

    :hover {
      color: var(--laranja);
    }
  }

  .foto {
    width: 55px;
    border-radius: 50px;
    margin-top: 10px;
  }

  .logo {
    width: 130px;
  }

  @media (min-width: 700px) {
    height: 100px;
    align-items: center;
    span {
      width: 220px;
      align-items: center;
    }
    .foto {
      width: 80px;
      margin-bottom: 20px;
    }

    div {
      margin-top: 30px;
    }

    .logo {
      width: 170px;
    }
    a {
      margin-right: 50px;
    }
  }
`;
