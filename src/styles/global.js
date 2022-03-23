import { createGlobalStyle } from "styled-components";

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
        --bege: #fcf4d9;
        --verde-claro: #8ed2c9;
        --verde-escuro: #00aaa0;
        --verde-medio: #70c76e;
        --amarelo: #cae45c;
        --laranja: #d55b3e;
        --laranja-escuro: #CB6A41;
        --bege-escuro: #EDE0C4;
        --preto: #000000;
        --cinza-escuro: #7D7C7C;
        --cinza: #c4c4c4;
        --cinza-claro: #C4C4C487;
        --branco: #fefefe;
        --vermelho: #cb4641;
    }
    button{
        cursor: pointer;
    }
    a{
        text-decoration: none;
    }
`;
