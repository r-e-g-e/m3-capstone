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
