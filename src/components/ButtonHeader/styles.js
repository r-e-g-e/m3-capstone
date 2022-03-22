import styled from "styled-components";

export const Container = styled.button`
  background: #fefefe;
  color: #d55b3e;
  padding: 5px 10px;
  border-color: var(--branco);
  border-radius: 10px;
  font-weight: bold;
  font-size: 14px;
  :hover {
    background: #d55b3e;
    color: #fefefe;
  }
  @media (min-width: 700px) {
    font-size: 24px;
  }
`;
