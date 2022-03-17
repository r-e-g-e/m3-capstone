import styled from "styled-components";

export const AboutButton = styled.button`
  width: 100%;
  height: 40px;
  position: fixed;
  bottom: 0px;
  border-radius: 0;
  border: 0;
  color: var(--branco);
  background-color: var(--verde-escuro);
  border: 2px solid var(--verde-escuro);
  font-weight: bold;
  font-size: 20px;
  :hover {
    background-color: var(--branco);
    color: var(--verde-escuro);
    transition: 0.4s;
  }
`;
