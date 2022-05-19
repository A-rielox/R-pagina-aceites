import React from 'react';

import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from '../styles/Themes';

const Showcase = () => {
   return (
      <ThemeProvider theme={lightTheme}>
         <Wrapper id="showcase" className="section">
            Showcase
         </Wrapper>
      </ThemeProvider>
   );
};

export default Showcase;

const Wrapper = styled.div`
   background-color: ${props => props.theme.body};
   color: ${props => props.theme.text};
`;
