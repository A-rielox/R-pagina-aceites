import React from 'react';

import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from '../styles/Themes';

import Slider from '../components/hone/Slider';
import TypeWriter from '../components/hone/TypeWriter';
import HeroImages from '../components/hone/HeroImages';

const Home = () => {
   return (
      <ThemeProvider theme={lightTheme}>
         <Wrapper id="home">
            <Container>
               <Box>
                  <TypeWriter />
               </Box>

               <Box className="slider-box">
                  {/* <Slider /> */}
                  <HeroImages />
               </Box>
            </Container>
         </Wrapper>
      </ThemeProvider>
   );
};

export default Home;

const Wrapper = styled.div`
   min-height: ${props => `calc(100vh - ${props.theme.navHeight})`};
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   position: relative;
   overflow: hidden;

   background-color: ${props => props.theme.body};
   color: ${props => props.theme.text};
`;

const Container = styled.div`
   width: 75%;
   max-width: 1300px;
   min-height: 80vh; // 🔔
   margin: 0 auto;
   /* background-color: #e6c4ad; */

   display: flex;
   justify-content: center;
   align-items: center;

   overflow: hidden;

   .slider-box {
      height: ${props => `calc(100vh - ${props.theme.navHeight})`};
      position: relative;
      @media screen and (max-width: 900px) {
         display: none;
      }
   }

   @media screen and (max-width: 900px) {
      width: 100%;
   }
`;

const Box = styled.div`
   width: 50%;
   height: 100%;
   // min-height: 80vh; // 🔔
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   position: relative;
`;
