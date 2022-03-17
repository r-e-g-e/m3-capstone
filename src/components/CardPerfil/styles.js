import styled from "styled-components";

export const Container = styled.div`
  background: var(--branco);
  height: 340px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    width: 100%;
    height: 140px;
    background: var(--verde-escuro);
    display: flex;
    padding: 10px;
    align-items: center;
    justify-content: space-between;

    .mobile {
      width: 50px;
      border-radius: 50px;
    }

    /* .desktop {
      width: 80px;
      border-radius: 50px;
      display: none;
    } */

    .perfil {
      color: var(--preto);
      width: 400px;
      span {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      h3 {
        color: var(--branco);
      }
      p {
        margin: 10px 0;
      }
    }
  }
  h4 {
    margin: 10px;
    color: var(--laranja);
    text-align: center;
    width: 200px;
  }
  div {
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 700px) {
    height: 275px;
    width: 660px;

    .perfil {
      span {
        width: 640px;
      }
    }

    header {
      height: 113px;
    }

    h4 {
      width: 400px;
    }
  }
`;
