import styled from "styled-components";

export const CollectionContainer = styled.div`
  min-height: 100%;
`;

export const CollectionHeader = styled.div`
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100px;
  background-color: #8ed2c9;
  margin: 0;

  .ajude,
  .me {
    font-size: 26px;
    font-weight: bold;
  }

  .ajude {
    color: #fff;
  }

  .me {
    color: #d55b3e;
  }
`;
