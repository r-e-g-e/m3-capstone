import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid var(--preto);
  width: 330px;
  height: 200px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  position: absolute;
  background-color: var(--bege);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  input {
    width: 260px;
    padding: 5px;
    margin: 5px 0;
  }

  h2 {
    color: var(--laranja);
    width: 260px;
    font-weight: 400;
  }
`;

export const Content = styled.div`
  margin-top: 10px;
  width: 260px;
  display: flex;
  justify-content: space-between;
`;

export const Contador = styled.div`
  display: flex;
  width: 200px;
  align-items: center;
  justify-content: space-evenly;

  input {
    width: 50px;
  }
`;
