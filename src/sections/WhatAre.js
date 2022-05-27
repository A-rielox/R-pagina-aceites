import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from '../styles/Themes';

import img from '../assets/images/fondo-what-are.jpg';

const WhatAre = () => {
   return (
      <ThemeProvider theme={lightTheme}>
         <Wrapper id="what-are" className="section">
            <Container>
               <Title>¿Qué son los aceites esenciales?</Title>

               <Text>
                  <span className="firstLetter">L</span>os aceites esenciales
                  son extractos vegetales concentrados cosechados de plantas,
                  hierbas y árboles que luego se destilan a vapor o se prensan
                  en frío de manera cuidadosa.
                  <br />
                  <br />
                  Estos aceites esenciales puros son más poderosos y potentes
                  que los componentes botánicos de los que fueron extraídos, por
                  lo tanto altamente concentrados para brindar beneficios para
                  la salud y el bienestar.
                  <br />
                  <br />
                  ¡Ya sea que uses los aceites como aromaterapia, cuidado
                  personal o como soluciones caseras, encontrarás que cada
                  aspecto de tu vida conseguirá un impulso con unas cuantas
                  gotas de aceite esencial!
               </Text>
            </Container>
         </Wrapper>
      </ThemeProvider>
   );
};

export default WhatAre;

const Wrapper = styled.div`
   color: ${props => props.theme.text};

   background-image: linear-gradient(
         rgba(252, 246, 244, 0.6),
         rgba(252, 246, 244, 0.6)
      ),
      url(${img});
   background-size: cover;
   background-repeat: no-repeat;
   /* background-attachment: fixed; lo hace parallax */
   background-position: center;
`;

const Container = styled.article`
   width: 75%;
   max-width: 1300px;
   min-height: 100vh;
   padding-top: 2rem;
   padding-bottom: 2rem;

   display: flex;
   justify-content: flex-end;
   align-items: center;

   position: relative;
`;

const Title = styled.h2`
   font-family: ${props => props.theme.ffTitle};
   font-size: ${props => props.theme.fSizeBanner};

   position: absolute;
   top: 5rem;
   left: 5%;
`;

const Text = styled.div`
   width: 75%;
   font-size: ${props => props.theme.fSizeNormal};
   background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.6)`};
   padding: 4rem;
   border-radius: 5px;

   letter-spacing: 1px;
   line-height: 1.75;

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
