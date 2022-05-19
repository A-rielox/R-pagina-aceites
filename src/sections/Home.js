import React from 'react';

import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from '../styles/Themes';

const Home = () => {
   return (
      <ThemeProvider theme={lightTheme}>
         <Wrapper id="home" className="section">
            Home
         </Wrapper>
      </ThemeProvider>
   );
};

export default Home;

const Wrapper = styled.div`
   /* overrides ( the .section ) */
   min-height: ${props => `calc(100vh - ${props.theme.navHeight})`};
   /* overrides end */

   background-color: ${props => props.theme.body};
   color: ${props => props.theme.text};
`;
