import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { DarkTheme } from '../styles/Themes';

const About = () => {
   return (
      <ThemeProvider theme={DarkTheme}>
         <Wrapper id="about" className="section">
            About
         </Wrapper>
      </ThemeProvider>
   );
};

export default About;

const Wrapper = styled.div`
   background-color: ${props => props.theme.body};
   color: ${props => props.theme.text};
`;
