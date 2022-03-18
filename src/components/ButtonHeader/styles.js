import styled from "styled-components";

export const Container = styled.button`
  transition: 0.4s;
  background: var(--branco);
  color: var(--laranja);
  padding: 5px 10px;
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
  @media (min-width: 600px) {
    font-size: 24px;
  }
`;