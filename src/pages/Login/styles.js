import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  min-height: 100vh;
  font-family: "Roboto", sans-serif;

  form {
    margin-top: 40px;
  }
`;

export const TituloLogin = styled.p`
  color: #d55b3e;
  text-align: center;
  font-weight: 100;
  font-size: 24pt;
  font-style: italic;
  margin-top: 110px;
`;

export const QuadroVerde = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #00aaa0;
  border-radius: 5px;
  width: 325px;
  height: 370px;
  margin: auto;
  margin-top: 5px;

  @media screen and (max-width: 375px) {
    width: 300px;
  }
`;

export const TituloInput = styled.p`
  color: #fefefe;
  font-size: 14pt;
  margin-left: 42px;
  margin-bottom: 5px;
  text-align: left;

  @media screen and (max-width: 375px) {
    margin-left: 35px;
  }
`;

export const InputLogin = styled.input`
  border-radius: 5px;
  font-size: 14pt;
  width: 220px;
  height: 40px;
  margin-left: 42px;
  padding: 0 5px;
  box-sizing: borde-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 375px) {
    margin-left: 35px;
  }
`;

export const BotaoEntrar = styled.button`
  background-color: #d55b3e;
  color: #fefefe;
  border-radius: 5px;
  border-color: none;
  font-weight: bold;
  font-size: 18px;
  width: 112px;
  height: 40px;
  margin-left: 106px;
  margin-top: 30px;

  @media screen and (max-width: 375px) {
    margin-left: 94px;
  }

  &:hover {
    background-color: #fefefe;
    color: #d55b3e;
    cursor: pointer;
  }
`;

export const BotaoVoltar = styled.button`
  background-color: rgba(76, 175, 80, 0);
  color: ##d55b3e;
  border: none;
  font-weight: bold;
  font-size: 18px;
  width: 112px;
  height: 40px;
  font-family: "Lobster", sans-serif;
  text-align: center;
  color: #d55b3e;
  font-size: 36px;
  margin: auto;

  &:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 600px) {
    display: none;
  }
`;
