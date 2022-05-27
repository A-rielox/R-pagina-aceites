import React, { useEffect, useRef } from 'react';

import styled, { ThemeProvider } from 'styled-components';
import { DarkTheme } from '../styles/Themes';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import content from '../components/showcase/cardsContent';
import Content from '../components/faq/Content';

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
               <div className="cap-width">
                  <Content useTheme="dark" thecontent={content[0]} />
               </div>
            </Slide1>

            <Slide2 ref={slide2Ref}>
               <div className="cap-width">
                  <Content useTheme="light" thecontent={content[1]} />
               </div>
            </Slide2>

            <Slide3 ref={slide3Ref}>
               <div className="cap-width">
                  <Content useTheme="dark" thecontent={content[2]} />
               </div>
            </Slide3>
         </Wrapper>
      </ThemeProvider>
   );
};

export default Faq;
/* max-width: 1300px; */

const Wrapper = styled.div`
   flex-direction: column;

   .cap-width {
      max-width: 1300px;
      margin: 0 auto;

      display: flex;
      justify-content: center;
      align-items: center;
   }
`;

const Slide1 = styled.div`
   height: 100vh;
   width: 100vw;
   display: block;
   color: ${props => props.theme.text};
   background-color: ${props => props.theme.body};
`;
const Slide2 = styled.div`
   height: 100vh;
   min-width: 100vw;
   background-color: ${props => props.theme.text};
   color: ${props => props.theme.body};
`;
const Slide3 = styled.div`
   height: 100vh;
   width: 100vw;
   color: ${props => props.theme.text};
   background-color: ${props => props.theme.body};
`;
