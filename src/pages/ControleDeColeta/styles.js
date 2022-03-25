import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-image: none;
  h2{
    font-weight: inherit;
    font-family: 'Roboto';
    font-style: italic;
    font-size: 23px;
    line-height: 42px;
    margin-top: 20px;
    color: var(--laranja);
    @media (min-width: 768px){
      font-weight: 300;
      font-size: 36px;
    }
  }
  input{
    margin: 10px 0;
    width: 246px;
    height: 41px;
    background: var(--cinza);
    color: var(--branco);
    font-size: 35px;
    border: 1px solid var(--preto);
    box-sizing: border-box;
    @media (min-width: 768px){
      width: 572px;
      height: 61px;
    }
  }
  .listAll{
    cursor: pointer;
    font-size: 25px;
    text-decoration: underline;
    cursor: pointer;
    font-family: Roboto, sans-serif;
  }
  .top{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .background{
    display: none;
    @media (min-width: 1566px){
      display: flex;
    }
  }
  .search{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (min-width: 996px){
      margin-top: 80px;
    }
  }
  .icon{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    color: var(--laranja);
    img{
    margin: 0 5px;
    width: 50px;
    height: 50px;
  }
    @media (min-width: 996px){
      font-weight: bold;
      font-size: 20px;
      flex-direction: column;
      position: absolute;
      right: 82%;
      margin-top: 70px;
      img{
        width: 150px;
        height: 150px;
      }
    }
  }
  .buttons{
    display: flex;
    flex-direction: column;
    @media (min-width: 768px){
      flex-direction: row;
      justify-content: space-around;
      width: 600px;
    }
  }
  @media (min-width: 1561px){
    background-image: url("/assets/background/travelImage.svg");
    background-repeat: no-repeat;
    background-position: 101% -2%;
    background-size: 533px
    }
`;

export const LocationsContainer = styled.div`
  width: 290px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 40px;
  .locationsInnerContainer {
    width: 95%;
    border: 2px solid black;
    height: 425px;
    overflow: scroll;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: flex-start;
    background-color: var(--bege-escuro);
    @media (min-width: 768px){
      width: 700px;
      border:none;
      background-color: var(--bege);
      overflow: inherit;
    }
    @media (min-width: 1354px){
      width: 1300px;
}
  }
`;
