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
  position: absolute;
  bottom: 0;
  img{
    display: none;
    @media (min-width: 786px){
      display: flex;
      width: 500px;
      height: 500px;
    }
  }
`;

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.4);

  display: flex;
  justify-content: center;
  align-items: center;
`;