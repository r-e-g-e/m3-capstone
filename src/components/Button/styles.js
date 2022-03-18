import styled from "styled-components";

export const Container = styled.button`
  transition: 0.4s; 
  background: var(--branco);
  color: var(--laranja);
  padding: 3px;
  width: 201px;
  border-color: var(--branco);
  border-radius: 5px;
  font-weight: bold;
  font-size: 14px;
  border: none;
  :hover {
    transition: 0.4s;
    background: var(--laranja);
    color: var(--branco);
  }
`;
