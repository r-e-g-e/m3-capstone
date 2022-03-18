import styled from "styled-components";

export const Container = styled.div`
  background: var(--cinza);
  width: 313px;
  height: 196px;
  border-radius: 40px;
  padding: 10px;
  color: var(--branco);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    width: 70px;
    height: 70px;
    border-radius: 50px;
  }

  div {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-size: 16px;
    }
    P {
      margin-top: 5px;
      font-size: 14px;
    }
  }

  button {
    padding: 5px 12px;
    border-radius: 5px;
    color: var(--laranja);
    background: var(--branco);
    border-color: var(--branco);
    align-self: center;
    margin-bottom: 10px;
    margin-right: 60px;

    :hover {
      color: var(--branco);
      background: var(--laranja);
    }
  }
  /* @media (min-width: 700px) {
    width: 561px;
    height: 80px;
  } */
`;
