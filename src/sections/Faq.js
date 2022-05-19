import React from 'react';

import styled, { ThemeProvider } from 'styled-components';
import { DarkTheme } from '../styles/Themes';

const Faq = () => {
   return (
      <ThemeProvider theme={DarkTheme}>
         <Wrapper id="faq" className="section">
            Faq
         </Wrapper>
      </ThemeProvider>
   );
};

export default Faq;

const Wrapper = styled.div`
   background-color: ${props => props.theme.body};
   color: ${props => props.theme.text};
`;
