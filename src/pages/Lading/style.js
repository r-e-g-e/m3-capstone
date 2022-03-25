import styled from "styled-components";

export const Header = styled.div`
  height: 75px;
  background: var(--verde-claro);
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  padding: 10px;
  @media (min-width: 600px) {
    height: 100px;
    align-items: center;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction:column;
  font-family: ui-sans-serif
`;

export const Flex = styled.div`
  display: flex;
   align-items: center;
   justify-content: space-around;
`;

export const ContainerMenu = styled.div`
  width: 300px;
  height: 500px;
  background-color: var(--verde-escuro);
  margin-top: 79px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .flex-column{
    margin-top: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .help-landing{
        width: 223px;
        height: 136px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 47px;
        text-align: center;
        color:  var(--branco);
    }      
`;

export const Figure = styled.figure`
   width: 400px;
   height: 400px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   p{
   width: 471px;
   height: 58px;
   font-family: 'Itim';
   font-style: normal;
   font-weight: 400;
   font-size: 48px;
   line-height: 58px;
   display: flex;
   align-items: center;
   color: var( --laranja);
   margin-top: 109px;
}
  span{
   width: 530px;
   height: 58px;
   font-family: 'Itim';
   font-style: normal;
   font-weight: 400;
   font-size: 24px;
   line-height: 29px;
   color: var( --laranja);  
   margin-left: 66px;
   margin-top: 30px;
}
@media (max-width: 1024px){
   display: none;
}
`;

export const Image = styled.img`
   width: 600px;
   height: 600px;
`;




