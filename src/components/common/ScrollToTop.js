import React, { useState, useEffect, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../styles/Themes';

import { ToTop } from './svgs';

const ScrollToTop = () => {
   const ref = useRef(null);
   const [scrolled, setScrolled] = useState(0);

   // devuelve lo "scrolleado" a "scrolled"
   useEffect(() => {
      const getY = () => {
         setScrolled(window.pageYOffset);
      };

      window.addEventListener('scroll', getY);

      return () => {
         window.removeEventListener('scroll', getY);
      };
   }, []);

   useEffect(() => {
      if (scrolled > 200) {
         ref.current.style.display = 'flex';
      } else {
         ref.current.style.display = 'none';
      }
   }, [scrolled]);

   const scrollTop = () => {
      return window.scroll({
         top: 0,
         left: 0,
         behavior: 'smooth',
      });
   };

   return (
      <ThemeProvider theme={lightTheme}>
         <Wrapper ref={ref} onClick={scrollTop}>
            <ToTop />
         </Wrapper>
      </ThemeProvider>
   );
};

export default ScrollToTop;

const Wrapper = styled.div`
   width: 3rem;
   height: 3rem;
   position: fixed;
   bottom: 1rem;
   right: 1rem;
   cursor: pointer;

   background-color: ${props => props.theme.body};
   padding: 0.2rem;
   border-radius: 50%;

   transition: ${props => props.theme.transition};

   &:hover {
      transform: scale(1.2);
   }

   svg {
      fill: ${props => props.theme.text};
   }
`;
