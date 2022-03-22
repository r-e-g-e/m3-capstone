import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${({ corDeFundo }) => corDeFundo};
  color: ${({ corDeFundo }) =>
    corDeFundo === "var(--laranja)" ? "var(--branco)" : "var(--laranja)"};
  width: 268px;
  height: 196px;
  font-family: "Itim", cursive;
  border-radius: 40px;
  padding: 20px;
  margin-top: 5px;
  margin-bottom: 10px;
  @media (min-width: 992px) {
    margin: 0;
    width: 313px;
  }

  .CardPontoDecoleta-Title__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    padding-top: 25px;
    width: 100%;
    height: 170px;

    @media (min-width: 992px) {
      height: 186px;
    }

    button {
      display: block;
      margin: 0 auto;
      margin-bottom: 25px;
    }

    h2 {
      font-size: 16px;
    }
  }

  button {
    align-self: center;
    border: 2px solid;
    border-radius: 5px;
    border-color: var(--branco);

    padding: 5px 12px;
    margin-bottom: 10px;
    margin-right: 60px;

    color: var(--laranja);
    background: var(--branco);

    :hover {
      color: var(--branco);
      background: var(--laranja);
      transition: 0.4s;
    }
  }
  /* @media (min-width: 700px) {
    width: 561px;
    height: 80px;
  } */
`;
