import styled from "styled-components";
import img from "../../assets/wheelchair2.svg";

export const Footer = styled.div`
  display: none;
  @media (min-width: 992px) {
    display: block;
    position: fixed;
    width: 648px;
    left: 0px;
    bottom: 0px;
    color: var(--laranja);
    font-size: 18px;
    font-family: "Itim", cursive;
    font-weight: bold;
    margin-bottom: 10px;
    a {
      color: var(--laranja);
      filter: brightness(1.6);
      text-decoration: underline;
    }
  }
`;

export const CollectionContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  .filter{
    color: var(--laranja);
    margin-bottom: 30px;
    cursor: pointer;
  }
  .mobile__h2 {
    text-align: center;
    font-weight: 500;
    font-size: 30px;
    line-height: 35px;
    font-style: italic;
    color: var(--laranja);
    @media (min-width: 992px) {
      display: none;
    }
  }

  @media (min-width: 992px) {
    background: url(${img});
    background-repeat: no-repeat;
    background-size: 500px;
    background-position: bottom -50px right -50px;
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
    width: 160px;
    height: 65px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-end;
    @media (min-width: 850px) {
      width: 300px;
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
      border-radius: 5px;
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
  height: 350px;
  .flex{
    display: flex;
    flex-direction: column;
    select{
      margin: 20px 0;
    }
  }
  .mobile__h2 {
    font-family: "Roboto", sans-serif;
  }
  @media (min-width: 768px){
    .flex{
      flex-direction: row;
    }
  }
  @media (min-width: 992px) {
    width: 750px;
    height: 145px;
    margin: 50px;
  }

  .select__innerContainer {
    width: inherit;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    .select__auxDiv {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      width: inherit;
      height: inherit;
      .flex{
        margin: 0;
        gap: 10px;
      }
      @media (min-width: 992px) {
        flex-direction: row;
      }
    }
    @media (min-width: 992px) {
      border-radius: 20px;
      flex-direction: row;
      width: 750px;
      height: 145px;
    }

    form {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      height: inherit;
      width: inherit;
      @media (min-width: 992px) {
        width: 750px;
        height: 145px;
        background-color: var(--verde-escuro);
        border-radius: 20px;
      }

      .select__h4 {
        font-family: "Roboto", sans-serif;
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
      color: var(--laranja);
      text-align: center;
    }
  }
`;

export const LocationsContainer = styled.div`
  width: 320px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (min-width: 992px) {
    width: 730px;
  }

  .h4__about {
    color: var(--laranja);
    width: 80%;
    height: 50px;
    font-size: 14px;
    text-align: center;
    font-family: "Itim", cursive;
    font-weight: bold;
    margin-bottom: 10px;
    a {
      color: cyan;
    }

    @media (min-width: 992px) {
      display: none;
    }
  }

  .locationsInnerContainer {
    width: 95%;
    border: 2px solid black;
    height: 425px;
    min-height: 425px;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--bege-escuro);
    @media (min-width: 768px){
      width: 600px;

    }
    @media (min-width: 992px) {
      flex-direction: row;
      width: 992px;
      overflow: inherit;
      justify-content: space-evenly;
      align-items: flex-start;
      flex-wrap: wrap;
      border: none;
      background-color: inherit;
    }
  }
`;
