import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: var(--verde-claro);

  height: 75px;
  width: 100vw;
  padding-bottom: 10px;

  display: flex;
  align-items: flex-end;
  justify-content: space-around;

`;

export const HeaderButtons = styled.button`
  all:unset;
  font-size: 12px;
  margin: 0 3px;
  padding: 5px;
  border-radius: 5px;
  transition: 0.3s;
  cursor: pointer;
  color: var(--branco);
  background-color: var(--laranja);
  margin-bottom: 5px;

  :hover {
    background-color: var(--branco);
    color: var(--laranja)
  }

  @media only screen and (min-width: 600px) {
  padding: 10px;
  }
  `;