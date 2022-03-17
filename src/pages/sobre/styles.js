import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

export const ContentContainer = styled.div`
  width: 90%;

  @media only screen and (min-width: 850px) {
  width: 60%;
  }
`;

export const TitulosLightItalic = styled.h2`
  font-size: 24px;
  font-weight: 200;
  font-style: italic;
  margin: 30px 0;
  color: var(--laranja);
  text-align: center;
  font-family: 'Roboto', sans-serif;

  @media only screen and (min-width: 850px) {
    font-size: 30px;
  }
`;

export const PDescricao = styled.p`
  margin-top: 25px;
  color:var(--preto);
  font-family: 'Roboto', sans-serif;
`;

export const DivSistemaCores = styled.div`

  margin: 0 auto;

  @media only screen and (min-width: 850px) {
  width: 60%;
  }
`;
export const DivCoresSobre = styled.div`
  margin-top: 10px;
  margin-bottom: 35px;
  display: flex;
  align-items: center;

  color: var(--preto);

  p {
    margin-left: 10px;
  }

  span {
    font-weight: bold;
  }
`;

export const DivCriadores = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
`;

export const Footer = styled.div`
  background-color: var(--verde-escuro);
`;

export const LinkedInLink = styled.a`
  color: var(--verde-escuro);
  cursor: pointer;
  text-align: center;
`;

export const SobreDiv = styled.div`
  width: 100%;
  height: 70px;
  margin-top: 25px;
  background-color: var(--verde-escuro);
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    background-color: magenta;
  }
`;