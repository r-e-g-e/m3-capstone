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

export const StyledButton = styled.button`
  margin: 10px 0;
  width: ${(props) => props.width};
  color: ${(props) =>
    props.bgColor === "#D55B3E" || props.bgColor === "orange"
      ? "var(--branco)"
      : "var(--laranja)"};
  background-color: ${(props) =>
    props.bgColor === "orange" ? "var(--laranja)" : "var(--branco)"};
  border-radius: 10px;
  border: 2px solid
    ${(props /* eslint-disable-next-line indent */) =>
      props.bgColor === "orange" ? "var(--laranja)" : "var(--branco)"};
  height: ${({ height }) => height};
  font-weight: 400;
  font-size: ${(props) => props.fontSize};
  font-family: "Roboto", sans-serif;
  :hover {
    background-color: ${(props /* eslint-disable-next-line indent */) =>
      props.bgColor === "orange" ? "var(--branco)" : "var(--laranja)"};
    color: ${(props /* eslint-disable-next-line indent */) =>
      props.bgColor === "orange" ? "var(--laranja)" : "var(--branco)"};
    transition: 0.4s;

  }
`;
