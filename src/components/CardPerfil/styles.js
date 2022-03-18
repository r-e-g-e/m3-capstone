import styled from "styled-components";

export const Container = styled.div`
  background: transparent;
  height: 340px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    width: 100%;
    height: 78px;
    background: var(--verde-escuro);
    display: flex;
    padding: 10px;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;

    .mobile {
      width: 60px;
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
        align-self: baseline;
        color: var(--branco);
      }
      p {
        margin: 10px 0;
      }
    }
  }
  .ponto {
    height: 106px;
    width: 290px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: var(--branco);
    margin-top: 20px;
    border-radius: 35px;
    font-size: 14px;
    align-items: center;
  }
  p {
    margin: 10px;
    color: var(--laranja);
    text-align: center;
  }

  button {
    font-size: 14px;
    font-weight: 300;
  }

  @media (min-width: 700px) {
    height: 275px;
    width: 660px;

    .ponto {
      height: 162px;
      width: 660px;
      margin-top: 10px;
    }

    .perfil {
      span {
        width: 640px;
      }
    }

    header {
      height: 113px;
      .mobile {
        width: 70px;
      }
    }

    h4 {
      width: 400px;
    }
  }
`;
