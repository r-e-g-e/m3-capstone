import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Backgrounds = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 90vw;
  img{
    display: none;
    @media (min-width: 786px){
      display: flex;
      width: 500px;
      height: 500px;
    }
  }
`;