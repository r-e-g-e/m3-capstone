import styled from "styled-components";

export const CollectionContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  h2 {
    text-align: center;
    font-weight: 500;
    font-size: 30px;
    line-height: 35px;
    font-style: italic;
    color: var(--laranja);
  }
`;

export const CollectionHeader = styled.div`
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100px;
  background-color: var(--verde-claro);
  margin: 0;

  .ajude,
  .me {
    font-size: 26px;
    font-weight: bold;
  }

  .ajude {
    color: var(--branco);
  }

  .me {
    color: var(--laranja);
  }
`;

export const SelectContainer = styled.div`
  width: 285px;
  height: 400px;

  .select__innerContainer {
    width: inherit;
    height: 317px;
    background-color: var(--verde-escuro);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    form {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      height: inherit;
    }

    select {
      width: 199px;
      height: 35px;
    }
  }
`;
