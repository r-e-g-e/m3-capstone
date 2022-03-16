import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #8ed2c9;

  height: 75px;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const HeaderButtons = styled.button`
  all:unset;
  margin: 0 5px;
  padding: 10px;
  border-radius: 5px;
  transition: 0.3s;
  cursor: pointer;
  color: #FEFEFE;
  background-color: #d55b3e;

  :hover{
    background-color: #FEFEFE;
    color: #d55b3e;
  }
`;