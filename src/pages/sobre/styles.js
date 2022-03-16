import styled from "styled-components";

export const Container = styled.div`
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ContentContainer = styled.div`
  width: 90%;
`;

export const TitulosLightItalic = styled.h2`
  font-size: 18px;
  font-weight: 500;
  font-style: italic;
  font-family: 'Roboto', sans-serif;
  color: var(--laranja);
  text-align: center;
  margin-top: 20px;
`;

export const PDescricao = styled.p`
  color:var(--laranja);
  font-family: 'Roboto', sans-serif;
`;

export const DivSistemaCores = styled.div`
  display: flex;
  margin-top: 10px;
  color: var(--laranja);
`;

export const DivCriadores = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  
`;