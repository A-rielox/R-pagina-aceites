import React from 'react';

import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from '../styles/Themes';

import comoUsar from '../assets/images/como-usar.jpg';
import content from '../components/showcase/cardsContent';
import Card from '../components/showcase/Card';

const Showcase = () => {
   return (
      <ThemeProvider theme={lightTheme}>
         <Wrapper id="showcase" className="section">
            <Container className="CONTAINER">
               <Title>¿Cómo usar los aceites esenciales?</Title>

               <Content className="CONTENT">
                  <Left className="LEFT">
                     <img className="img" src={comoUsar} alt="comoUsar" />
                  </Left>

                  <Right className="RIGHT">
                     <Text className="TEXT--WRIGHT">
                        <span className="firstLetter">C</span>on tantos aceites
                        esenciales a su alcance que tienen tantos usos posibles,
                        seguramente se preguntará cómo usarlos todos. No se
                        preocupe, con un poco de ayuda, ¡será un profesional en
                        poco tiempo!
                     </Text>

                     <div className="cards-wrapper">
                        {content.map(card => {
                           return <Card cardContent={card} key={card.id} />;
                        })}
                     </div>
                  </Right>
               </Content>
            </Container>
         </Wrapper>
      </ThemeProvider>
   );
};

export default Showcase;

const Wrapper = styled.div`
   background-color: ${props => props.theme.body};
   color: ${props => props.theme.text};
`;

const Container = styled.article`
   width: 75%;
   max-width: 1300px;
   min-height: 100vh;
   padding-top: 2rem;
   padding-bottom: 2rem;

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   position: relative;
`;

const Title = styled.h2`
   font-family: ${props => props.theme.ffTitle};
   font-size: ${props => props.theme.fSizeBanner};

   align-self: flex-start;
`;

const Content = styled.div`
   display: flex;
   margin-top: 2rem;

   @media screen and (max-width: 900px) {
      justify-content: center;
   }
`;

const Left = styled.div`
   width: 50%;

   @media screen and (max-width: 1100px) {
      width: 30%;
   }

   @media screen and (max-width: 900px) {
      display: none;
   }
`;

const Right = styled.div`
   width: 50%;
   display: flex;
   flex-direction: column;
   align-items: flex-start;

   margin-left: 2rem;

   @media screen and (min-width: 1100px) {
      padding-left: 4rem;
   }

   @media screen and (max-width: 1100px) {
      width: 70%;
   }

   @media screen and (max-width: 900px) {
      margin-left: 0;
   }

   @media screen and (max-width: 600px) {
      width: 100%;
   }

   .cards-wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
   }
`;

const Text = styled.div`
   width: 100%;
   font-size: ${props => props.theme.fSizeNormal};
   background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.6)`};
   /* padding: 4rem; */
   border-radius: 5px;

   letter-spacing: 1px;
   line-height: 1.75;
   /* margin-bottom: 4rem; */

   .firstLetter {
      background: ${props => props.theme.text};
      color: ${props => props.theme.body};
      border-radius: 5px;
      font-size: 2rem;
      font-weight: 700;
      text-transform: uppercase;
      margin-left: 1rem;
      margin-right: 0.5rem;

      padding: 0.5rem 0.7rem;
      font-family: ${props => props.theme.ffTitle};
      line-height: 1;
      display: inline-block;
   }
`;
