import styled from "styled-components";

export const Container = styled.div`
  width: 100%;


  @media only screen and (min-width: 600px) {
    width: 110px;
  }

  @media only screen and (min-width: 1280px) {
    width: 150px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;  
  flex-direction: row;
  justify-content: space-around; 

  @media only screen and (min-width: 600px) {
    flex-direction: column;
  }
`;

export const Nome = styled.p`
  width: 100%;
  height: 36px;
  margin-top: 5px;
  margin-bottom: 10px;
  font-weight: 500;
  font-style: italic;
  text-align: center;
  color: var(--laranja);
  font-family: 'Roboto', sans-serif;

  display: flex;
  justify-content: center;
  align-items: center;

    @media only screen and (min-width: 600px) {
      margin-top: 10px;
      font-size: 16px;
    }

    @media only screen and (min-width: 1280px) {
      width: 150px;
      font-size: 20px;
    }
`;

export const FotoPerfil = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  color: var(--branco);
  background-color: var(--laranja);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;


  
  @media only screen and (min-width: 600px) {
    width: 90px;
    height: 90px;
    margin-bottom: 10px;
  }

  @media only screen and (min-width: 800px) {
    width: 110px;
    height: 110px;
  }

  @media only screen and (min-width: 1280px) {
    width: 150px;
    height: 150px;
  }
`;

export const CargoSpan = styled.span`
  height: 36px;

  font-size: 14px;
  font-weight: 500;
  font-style: italic;
  text-align: center;
  color: var(--laranja);
  margin: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 1280px) {
    width: 100%;
  }
  @media only screen and (min-width: 1280px) {
      width: 150px;
      font-size: 16px;
    }
`;

export const LinkedInLink = styled.a`
  cursor: pointer;
  margin-top: 10px;
  text-align: center;
  color: var(--verde-escuro);
  
  img {
    width: 30px;
  }
`;