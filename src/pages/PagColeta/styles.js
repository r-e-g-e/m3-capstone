import styled from "styled-components";

export const CollectionContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  h2 {
    text-align: center;
    font-weight: 500;
    font-size: 30px;
    line-height: 35px;
    font-style: italic;
    color: var(--laranja);
  }

  @media (min-width: 992px) {
    h2 {
      display: none;
    }
  }
`;

export const CollectionHeader = styled.div`
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100px;
  background-color: var(--verde-claro);
  margin: 0;

  .loggedin__navContainer {
    width: 120px;
    height: 65px;
    display: flex;
    flex-direction: row
    flex-wrap: wrap;
    @media (min-width: 850px) {
      flex-direction: row;
    }

    .profilePic {
      display: flex;
      flex-direction: row;
      width: inherit;
      align-items: center;
      justify-content: flex-end;
      height: 40px;
    }

    a {
      text-decoration: none;
      color: var(--branco);
      :hover {
      }
    }
  }

  .ajude,
  .me {
    font-size: 26px;
    font-weight: bold;
  }

  .ajude {
    color: var(--branco);
  }

  .me {
    color: var(--laranja);
  }
`;

export const SelectContainer = styled.div`
  width: 285px;
  height: 400px;
  @media (min-width: 992px) {
    width: 750px;
    height: 230px;
  }

  .select__innerContainer {
    width: inherit;
    height: 317px;
    background-color: var(--verde-escuro);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    @media (min-width: 992px) {
      border-radius: 20px;
      flex-direction: row;
    }

    form {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      height: inherit;
      width: inherit;

      h4 {
        font-size: 25px;
        color: var(--branco);
        display: none;

        @media (min-width: 992px) {
          display: block;
        }
      }

      .selectBtnAuxContainer {
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
        align-items: center;
        height: inherit;

        @media (min-width: 992px) {
          height: 80px;
          width: 100%;
          flex-direction: row;
        }
      }

      @media (min-width: 992px) {
        justify-content: space-around;
      }
    }

    select {
      width: 199px;
      height: 35px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
`;

export const LocationsContainer = styled.div`
  display: none;

  @media (min-width: 992px) {
    display: block;
    width: 91%;
    height: 100px;
    border-radius: 20px;
    background-color: var(--branco);
  }
`;
