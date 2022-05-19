import React from 'react';

import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from '../styles/Themes';

const Footer = () => {
   return (
      <ThemeProvider theme={lightTheme}>
         <Wrapper id="footer" className="section">
            Footer
         </Wrapper>
      </ThemeProvider>
   );
};

export default Footer;

const Wrapper = styled.div`
   background-color: ${props => props.theme.body};
   color: ${props => props.theme.text};
`;
