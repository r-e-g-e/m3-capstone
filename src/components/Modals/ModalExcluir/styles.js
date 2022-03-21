import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 200px;
  font-size: 15px;
  text-align: center;
  color: var(--laranja);
  border-radius: 10px;
  background-color: var(--bege);
  border: 2px solid var(--laranja);

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  div {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  @media only screen and (min-width:700px) {
    width: 550px;
    height: 300px;
    font-size: 20px;

    button {
      width: 150px;
      height: 50px;
      font-size: 24px;
    }
  }
`;