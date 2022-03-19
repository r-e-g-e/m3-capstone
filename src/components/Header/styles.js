import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  height: 75px;
  padding: 10px;

  background: var(--verde-claro);

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

export const LogadoContainer = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  gap: 20px;

  img{
    width: 59px;
    height: 59px;

    border-radius: 100%;
  }

  ul{
    display: flex;
    gap: 20px;

    list-style: none;

    a{
      color: white;
    }
  }
`;