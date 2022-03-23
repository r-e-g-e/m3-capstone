import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  right: 20px;
  background: var(--bege);
  height: 500px;
  width: 300px;
  border: 1px solid var(--preto);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 31px;
  padding: 20px 10px;

  section {
    width: 100%;
    height: 100px;
    background-color: var(--cinza-claro);
    border-radius: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
    overflow-y: scroll;

    div {
      color: var(--branco);
      background: var(--cinza);
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 80%;
      margin-top: 10px;
      h3 {
        width: 100px;
      }
      button {
        padding: 3px;
      }
      span {
        width: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--cinza-escuro);
        padding: 5px;
      }
    }
  }

  h2 {
    color: var(--laranja);
  }
  @media(min-width: 768px){
    height: 400px;
    width: 600px;
  }
  section {
    width: 100%;
    height: 400px;
  }
`;

export const Content = styled.div`
  button {
    margin: 20px;
  }
`;
