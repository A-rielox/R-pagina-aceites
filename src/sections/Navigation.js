import React from 'react';

import styled, { ThemeProvider } from 'styled-components';
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
               <Logo>S M</Logo>

               <Menu>
                  <MenuLink onClick={() => goTo('home')}>Home</MenuLink>
                  <MenuLink onClick={() => goTo('about')}>About</MenuLink>
                  <MenuLink onClick={() => goTo('showcase')}>Showcase</MenuLink>
                  <MenuLink onClick={() => goTo('faq')}>FAQ</MenuLink>
                  <MenuLink onClick={() => goTo('footer')}>Footer</MenuLink>
               </Menu>

               <ButtonDiv>
                  <button>Unete</button>
               </ButtonDiv>
            </Navbar>
         </Section>
      </ThemeProvider>
   );
};

export default Navigation;

const Section = styled.section`
   background-color: ${props => props.theme.body};
   color: ${props => props.theme.text};
`;

const Navbar = styled.nav`
   background-color: lightcyan;
   height: ${props => props.theme.navHeight};

   display: flex;
   justify-content: space-between;
   align-items: center;
`;

const Logo = styled.h2`
   font-family: ${props => props.theme.ffTitle};
   font-size: 'calc(2em + 1vw)';
`;

const Menu = styled.ul`
   display: flex;
   justify-content: space-between;
`;

const MenuLink = styled.li`
   cursor: pointer;

   margin: 0 1rem;
   font-size: calc(0.6em + 0.5vw);
`;

const ButtonDiv = styled.div``;
