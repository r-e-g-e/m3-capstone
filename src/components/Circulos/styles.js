import styled from "styled-components";

export const CirculosSistemasDeCores = styled.div`
  width: 40px;
  min-width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: ${props => props.color === "verde" ? "#89d897" : props.color === "amarelo" ? "#fcd57d" : "#fc9d9d"};
`;