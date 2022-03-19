import styled from "styled-components";

export const Container = styled.button`
  transition: 0.4s; 
  background: var(--branco);
  background: ${(props) => (props.Cor ? "var(--branco)" : "var(--laranja)")};
  color: ${(props) => (props.Cor ? "var(--laranja)" : "var(--branco)")};
  padding: 3px;
  width: 150px;
  height: 40px;
  margin: 5px 0;
  border-color: var(--branco);
  border-radius: 5px;
  font-weight: bold;
  font-size: 14px;
  border: none;
  :hover {
    transition: 0.4s;
    background: ${(props) => (props.Cor ? "var(--laranja)" : "var(--branco)")};
    color: ${(props) => (props.Cor ? "var(--branco)" : "var(--laranja)")};
  }
`;
