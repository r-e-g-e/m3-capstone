import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  img {
    max-width: 500px;
    width: 60%;
    z-index: -1;
  }

  @media (max-width: 700px) {
    img {
      display: none;
    }
  }
`;

export const LeftImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const RightImage = styled.img`
  position: absolute;
  right: 0;
  top: 10vh;
`;
