import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
 *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    body {
        font-family: "Roboto", sans-serif ;
        background-color: var(--bege);
    }
    :root {
        --branco: #fefefe;
        --verde-claro: #8ed2c9;
        --verde-escuro: #00aaa0;
        --cinza: #c4c4c4;
        --laranja: #d55b3e;
        --preto: #000000;
        --bege: #fcf4d9;
    }
    button{
        cursor: pointer;
    }
    a{
        text-decoration: none;
    }
`;

export const CollectionContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  h2 {
    text-align: center;
    font-weight: 500;
    font-size: 30px;
    line-height: 35px;
    font-style: italic;
    color: var(--laranja);
  }
`;

export const CollectionHeader = styled.div`
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100px;
  background-color: var(--verde-claro);
  margin: 0;

  .ajude,
  .me {
    font-size: 26px;
    font-weight: bold;
  }

  .ajude {
    color: var(--branco);
  }

  .me {
    color: var(--laranja);
  }
`;
