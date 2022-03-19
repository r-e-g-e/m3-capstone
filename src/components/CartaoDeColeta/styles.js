import styled from "styled-components";

export const CartaoDeColetaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.color};
  border-radius: 40px;
  h6 {
    color: var(--branco);
    font-size: 16px;
  }
`;
