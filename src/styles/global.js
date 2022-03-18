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
    .help-landing{
        width: 223px;
        height: 136px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 47px;
        text-align: center;
        color:  var(--branco);
    }
    .button{
        background-color: var( --laranja);
        width:200px;
        height: 40px;
        color var(--branco);
        border: none;
        border-radius: 8px;
        margin: 10px 0;
    }
    .flex{
        margin-top: 20px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
`;
