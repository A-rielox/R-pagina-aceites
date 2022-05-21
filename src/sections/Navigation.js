import React from 'react';

import Logo from '../components/nav-components/Logo';
// import Button from '../components/common/Button';

import styled, { ThemeProvider, keyframes } from 'styled-components';
import { lightTheme } from '../styles/Themes';

const Navigation = () => {
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
            <Navbar>
               <Logo />

               <Menu>
                  <MenuLink onClick={() => goTo('home')}>Home</MenuLink>
                  <MenuLink onClick={() => goTo('about')}>About</MenuLink>
                  <MenuLink onClick={() => goTo('showcase')}>Showcase</MenuLink>
                  <MenuLink onClick={() => goTo('faq')}>FAQ</MenuLink>
                  <MenuLink onClick={() => goTo('footer')}>Footer</MenuLink>
               </Menu>

               {/* <ButtonDiv>
                  <Button
                     text="Únete"
                     link="/"
                     fontSize="1rem"
                     padding="0.9rem 2.3rem"
                  />
               </ButtonDiv> */}
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
   width: 85%;
   margin: 0 auto;
   height: ${props => props.theme.navHeight};

   display: flex;
   justify-content: space-between;
   align-items: center;
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

// const ButtonDiv = styled.div``;
