import styled from "styled-components";

export const Container = styled.footer`
  background: var(--verde-escuro);
  height: 38px;
  display: flex;
  align-items:  center;
  justify-content: center;
  position:absolute;
	bottom:0;
	width:100%;

  a {
    color: var(--branco);
    font-weight: 400;
    font-family: Lobster;
    font-size: 18px;
    font-family: "Lobster", cursive;
  }

  @media (min-width: 600px) {
    height: 75px;

    a {
      font-size: 30px;
    }
  }
`;
