import styled from "styled-components";

export const Container = styled.button`
  background: ${(props) => (props.Cor ? "var(--branco)" : "var(--laranja)")};
  color: ${(props) => (props.Cor ? "var(--laranja)" : "var(--branco)")};
  padding: 3px;
  width: 201px;
  border-color: var(--branco);
  border-radius: 5px;
  font-weight: bold;
  font-size: 14px;
  :hover {
    background: ${(props) => (props.Cor ? "var(--laranja)" : "var(--branco)")};
    color: ${(props) => (props.Cor ? "var(--branco)" : "var(--laranja)")};
  }
`;
