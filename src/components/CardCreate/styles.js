import styled from "styled-components";

export const Container = styled.div`
  background: transparent;
  height: 340px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;

  section {
    width: 100%;
    height: 78px;
    background: var(--verde-escuro);
    display: flex;
    padding: 10px;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;

    img {
      width: 60px;
      border-radius: 50px;
    }

    h3 {
      align-self: baseline;
      color: var(--branco);
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

    section {
      height: 113px;

      img {
        width: 70px;
      }
    }
  }
`;
