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
`;

export const Flex = styled.div`
  display: flex;
   align-items: center;
   justify-content: space-around;
`;

export const ContainerMenu = styled.div`
  width: 354px;
  height: 549px;
  background-color: #00AAA0;
  margin-top: 79px;
  justify-content: center;
  align-items: center;
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
   color: #D55B3E;
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
   color: #D55B3E;  
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




