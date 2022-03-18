import styled from "styled-components";

export const Container = styled.button`
  background: var(--branco);
  color: var(--laranja);
  padding: 5px 10px;
  border-color: var(--branco);
  border-radius: 10px;
  font-weight: bold;
  font-size: 14px;
  :hover {
    background: var(--laranja);
    color: var(--branco);
  }
  @media (min-width: 700px) {
    font-size: 24px;
  }
`;
