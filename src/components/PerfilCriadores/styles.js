import styled from "styled-components";

export const Container = styled.div`
  width: 110px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  p {
    margin-top: 5px;
    text-align: center;
    font-weight: bold;
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
  font-size: 30px;

  @media only screen and (min-width: 600px) {
  width: 110px;
  height: 110px;
  }
`;

export const CargoSpan = styled.span`
  text-align: center;
  font-size: 14px;
  opacity: 0.8;
  margin: 5px 0;
`;