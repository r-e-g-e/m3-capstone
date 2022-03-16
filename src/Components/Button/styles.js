import styled from "styled-components";

export const StyledButton = styled.button`
  width: ${(props) => (props.isWide ? "200px" : "100px")};
  color: ${(props) =>
    props.bgColor === "#D55B3E" || props.bgColor === "orange"
      ? "#fff"
      : "#D55B3E"};
  background-color: ${(props) =>
    props.bgColor === "orange" ? "#D55B3E" : "#fff"};
  border-radius: 10px;
  border: 2px solid
    ${(props) => (props.bgColor === "orange" ? "#D55B3E" : "#fff")};
  height: 40px;
  cursor: pointer;

  :hover {
    background-color: ${(props /* eslint-disable-next-line indent */) =>
      props.bgColor === "orange" ? "#fff" : "#D55B3E"};
    color: ${(props) => (props.bgColor === "orange" ? "#D55B3E" : "#fff")};
    transition: 0.4s;
  }
`;

/*
#FCF4D9 - background
#8ED2C9 - verde-claro
#00AAA0 - verde-escuro
#D55B3E - laranja (?)
*/
