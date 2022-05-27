import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

import Logo from '../components/common/Logo';

import styled, { ThemeProvider, keyframes } from 'styled-components';
import { lightTheme } from '../styles/Themes';

const Navigation = () => {
   let logoRef = useRef(null);
   let elementRef1 = useRef(null);
   let elementRef2 = useRef(null);
   let elementRef3 = useRef(null);
   let elementRef4 = useRef(null);
   let elementRef5 = useRef(null);

   let tl3 = gsap.timeline();

   useEffect(() => {
      tl3.to('.nav', { visibility: 'visible' }, 0.5)
         .from(
            logoRef,
            {
               x: -150,
               ease: 'power2',
               duration: 0.3,
            },
            'Start'
         )
         .from(
            elementRef1,
            {
               x: -150,
               ease: 'power2',
               duration: 0.3,
            },
            'Start'
         )
         .from(elementRef2, {
            x: -150,
            ease: 'power2',
            duration: 0.3,
         })
         .from(elementRef3, {
            x: -150,
            ease: 'power2',
            duration: 0.3,
         })
         .from(elementRef4, {
            x: -150,
            ease: 'power2',
            duration: 0.3,
         })
         .from(elementRef5, {
            x: -150,
            ease: 'power2',
            duration: 0.3,
         });
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
            <Navbar className="nav">
               <div className="element-wrapper">
                  <div className="logo" ref={el => (logoRef = el)}>
                     <Logo />
                  </div>
               </div>

               <Menu>
                  <div className="element-wrapper">
                     <MenuLink
                        onClick={() => goTo('home')}
                        ref={el => (elementRef1 = el)}
                     >
                        Home
                     </MenuLink>
                  </div>

                  <div className="element-wrapper">
                     <MenuLink
                        onClick={() => goTo('about')}
                        ref={el => (elementRef2 = el)}
                     >
                        About
                     </MenuLink>
                  </div>

                  <div className="element-wrapper">
                     <MenuLink
                        onClick={() => goTo('showcase')}
                        ref={el => (elementRef3 = el)}
                     >
                        Showcase
                     </MenuLink>
                  </div>

                  <div className="element-wrapper">
                     <MenuLink
                        onClick={() => goTo('faq')}
                        ref={el => (elementRef4 = el)}
                     >
                        FAQ
                     </MenuLink>
                  </div>

                  <div className="element-wrapper">
                     <MenuLink
                        onClick={() => goTo('footer')}
                        ref={el => (elementRef5 = el)}
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
   .nav {
      visibility: hidden;
   }
`;

const Navbar = styled.nav`
   width: 85%;
   max-width: 1300px;
   margin: 0 auto;
   height: ${props => props.theme.navHeight};

   display: flex;
   justify-content: space-between;
   align-items: center;

   .element-wrapper {
      overflow: hidden;
   }
`;

const Menu = styled.ul`
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

const MenuLink = styled.li`
   cursor: pointer;
   margin: 0 0.5rem;
   font-size: 1rem;
   position: relative;
   transition: ${props => props.theme.transition} 0.25s;
   padding: 1rem;

   @media screen and (max-width: 900px) {
      margin: 0 0.2rem;
      padding: 0.5rem;
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
