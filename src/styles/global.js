import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
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
        --laranja-02: #cb6a41;
        --preto: #000000;
        --cinza: #c4c4c4;
        --branco: #fefefe;  
    }
    button{
        cursor: pointer;
    }
    a{
        text-decoration: none;
    }

`;
