import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 450px;
  border-radius: 10px;
  background-color: var(--bege);
  border: 2px solid var(--laranja);
  position: relative;

  form {
    margin-top: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  @media only screen and (min-width: 600px) {
    width: 650px;
    height: 400px;
  }
`;

export const CloseModalButton = styled.button`
    all: unset;
    font-size: 18px;
    font-weight: bold;
    top: 7px;
    right: 10px;
    position: absolute;
    cursor: pointer;
`;

export const StyledLabel = styled.label`
  width: 90%;
  height: 70px;
  font-size: 20px;
  margin-bottom: 10px;
  color: var(--laranja);

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  input {
    all: unset;
    height: 30px;
    padding-left: 10px;
    font-size: 18px;
    outline: none;
    color: var(--laranja);
    border-radius: 5px;
    border: 2px solid var(--laranja);
    background-color: var(--bege-escuro);
  }

`;
