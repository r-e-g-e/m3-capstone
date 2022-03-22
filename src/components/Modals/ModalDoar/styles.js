import styled from "styled-components";

export const Container = styled.div`

  width: 330px;
  height: 210px;
  border-radius: 10px;
  border: 2px solid black;
  background-color: var(--bege);
  color: var(--laranja);
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  span {
    color: var(--verde-claro);
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
`;

export const StyledInput = styled.input`
  all:unset;
  outline: none;
  width: 190px;
  height: 30px;
  padding-left: 10px;
  border-radius: 5px;
  border: 1px solid black;
  background-color: var(--bege-escuro);
`;