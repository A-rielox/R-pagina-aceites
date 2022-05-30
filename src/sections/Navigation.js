import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

import Logo from '../components/common/Logo';

import styled, { ThemeProvider, keyframes } from 'styled-components';
import { lightTheme } from '../styles/Themes';

const Navigation = () => {
   let navRef = useRef(null);
   let logoRef = useRef(null);
   let elementRef1 = useRef(null);
   let elementRef2 = useRef(null);
   let elementRef3 = useRef(null);
   let elementRef4 = useRef(null);

   let tl3 = gsap.timeline();

   useEffect(() => {
      tl3.to(navRef, { visibility: 'visible' })
         .to(
            logoRef,
            {
               left: 0,
               ease: 'power2',
               duration: 0.3,
            },
            'Start'
         )
         .to(
            elementRef1,
            {
               left: 0,
               ease: 'power2',
               duration: 0.3,
            },
            'Start'
         )
         .to(elementRef2, {
            left: 0,
            ease: 'power2',
            duration: 0.3,
         })
         .to(elementRef3, {
            left: 0,
            ease: 'power2',
            duration: 0.3,
         })
         .to(elementRef4, {
            left: 0,
            ease: 'power2',
            duration: 0.3,
         });

      return () => {
         tl3.kill();
      };
   }, []);

   const goTo = id => {
      let section = document.getElementById(id);

      section.scrollIntoView({
         behavior: 'smooth',
         block: 'start',
         inline: 'nearest',
      });
   };

   return (
      <ThemeProvider theme={lightTheme}>
         <Section id="navigation">
            <Navbar ref={el => (navRef = el)}>
               <div className="element-wrapper">
                  <div className="logo" ref={el => (logoRef = el)}>
                     <Logo />
                  </div>
               </div>

               <Menu>
                  <div className="element-wrapper">
                     <MenuLink
                        onClick={() => goTo('what-are')}
                        ref={el => (elementRef1 = el)}
                     >
                        ¿Qué son?
                     </MenuLink>
                  </div>

                  <div className="element-wrapper">
                     <MenuLink
                        onClick={() => goTo('about')}
                        ref={el => (elementRef2 = el)}
                     >
                        Beneficios
                     </MenuLink>
                  </div>

                  <div className="element-wrapper">
                     <MenuLink
                        onClick={() => goTo('showcase')}
                        ref={el => (elementRef3 = el)}
                     >
                        Usos
                     </MenuLink>
                  </div>

                  <div className="element-wrapper">
                     <MenuLink
                        onClick={() => goTo('footer')}
                        ref={el => (elementRef4 = el)}
                     >
                        Footer
                     </MenuLink>
                  </div>
               </Menu>
            </Navbar>
         </Section>
      </ThemeProvider>
   );
};

export default Navigation;
const fill = keyframes`
   0% {
      width: 0%;
      height: 2px;
   }
   50% {
      width: 100%;
      height: 2px;
   }
   100% {
      width: 100%;
      height: 100%;
      background: #36254e;
   }
`;

const Section = styled.section`
   background-color: ${props => props.theme.body};
   color: ${props => props.theme.text};
`;

const Navbar = styled.nav`
   visibility: hidden;

   width: 85%;
   max-width: 1300px;
   margin: 0 auto;
   height: ${props => props.theme.navHeight};

   display: flex;
   justify-content: space-between;
   align-items: center;

   @media screen and (max-width: 900px) {
      justify-content: center;
   }

   @media screen and (max-width: 600px) {
      width: 95%;
   }

   .element-wrapper {
      overflow: hidden;

      .logo {
         position: relative;
         left: -150px;

         @media screen and (max-width: 900px) {
            display: none;
         }
      }
   }
`;

const Menu = styled.ul`
   display: flex;
   justify-content: space-between;
   align-items: center;

   @media screen and (max-width: 900px) {
      width: 100%;
      padding: 0 0.5rem;
   }
`;

const MenuLink = styled.li`
   cursor: pointer;
   margin: 0 0.5rem;
   font-size: 1rem;
   position: relative;
   left: -150px;
   transition: ${props => props.theme.transition} 0.25s;
   padding: 1rem;

   @media screen and (max-width: 900px) {
      margin: 0 0.2rem;
      padding: 0.5rem;
   }

   @media screen and (max-width: 600px) {
      font-size: 0.7rem;
   }

   &::after {
      content: ' ';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin: 0;
      opacity: 0;
      width: 0%;
      color: transparent;
      height: 2px;
      border-radius: 5px;
   }

   &:hover {
      color: ${props => props.theme.body};
      z-index: 1;
   }

   &:hover::after {
      z-index: -10;
      animation: ${fill} 0.5s forwards;
      opacity: 1;
   }
`;
