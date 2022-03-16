import styled from "styled-components";

export const Container = styled.div`
  min-width: 60px;
  max-width: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  p {
    margin-top: 5px;
    text-align: center;
  }

  @media only screen and (min-width: 600px) {
  p {
    margin-top: 10px;
    font-size: 20px;
  }
  }
`;

export const FotoPerfil = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  color: var(--branco);
  background-color: var(--laranja);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;

  @media only screen and (min-width: 600px) {
  width: 110px;
  height: 110px;
  }
`;