import styled from "styled-components";

export const StyledButton = styled.button`
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
  height: 40px;
  font-weight: bold;
  font-size: 18px;
  :hover {
    background-color: ${(props /* eslint-disable-next-line indent */) =>
      props.bgColor === "orange" ? "var(--branco)" : "var(--laranja)"};
    color: ${(props) => (props.bgColor === "orange" ? "#D55B3E" : "#fff")};
    transition: 0.4s;
  }
`;
