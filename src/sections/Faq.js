import React, { useEffect, useRef } from 'react';

import styled, { ThemeProvider } from 'styled-components';
import { DarkTheme } from '../styles/Themes';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Faq = () => {
   const slide1Ref = useRef(null);
   const slide2Ref = useRef(null);
   const slide3Ref = useRef(null);

   gsap.registerPlugin(ScrollTrigger);

   useEffect(() => {
      let slide1 = slide1Ref.current;
      let slide2 = slide2Ref.current;
      let slide3 = slide3Ref.current;

      let t2 = gsap.timeline();
      setTimeout(() => {
         t2.to(slide1, {
            scrollTrigger: {
               trigger: slide1,
               start: 'top top',
               end: 'bottom top',
               scrub: true,
               pin: true,
               pinSpacing: false,
               // markers: true,
            },
         });

         t2.to(slide2, {
            scrollTrigger: {
               trigger: slide2,
               start: 'top top',
               end: 'bottom top',
               scrub: true,
               pin: true,
               pinSpacing: false,
               // markers: true,
            },
         });

         t2.to(slide3, {
            scrollTrigger: {
               trigger: slide3,
               start: 'top top',
               end: 'bottom top',
               scrub: true,
               pin: true,
               pinSpacing: false,
               // markers: true,
            },
         });

         ScrollTrigger.refresh();
      }, 1000);
   }, []);

   return (
      <ThemeProvider theme={DarkTheme}>
         <Wrapper id="faq" className="section">
            <Slide1 ref={slide1Ref}>
               <h1>slide1</h1>
            </Slide1>

            <Slide2 ref={slide2Ref}>
               <h1>slide2</h1>
            </Slide2>

            <Slide3 ref={slide3Ref}>
               <h1>slide3</h1>
            </Slide3>
         </Wrapper>
      </ThemeProvider>
   );
};

export default Faq;

const Wrapper = styled.div`
   background-color: ${props => props.theme.body};
   color: ${props => props.theme.text};

   flex-direction: column;
`;

const Slide1 = styled.div`
   min-height: 100vh;
   min-width: 100vw;
   background-color: red;
   display: block;
`;
const Slide2 = styled.div`
   height: 100vh;
   min-width: 100vw;
   background-color: blue;
`;
const Slide3 = styled.div`
   height: 100vh;
   min-width: 100vw;
   background-color: green;
`;
