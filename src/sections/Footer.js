import React from 'react';

import styled, { ThemeProvider, keyframes } from 'styled-components';
import { lightTheme } from '../styles/Themes';

import Logo from '../components/common/Logo';
import Banner from '../components/footer/Banner';

const Footer = () => {
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
         <Wrapper id="footer">
            <Banner />

            <Container className="CONTAINER">
               <Left className="LEFT">
                  <Logo />
               </Left>

               <Menu className="MENU">
                  <MenuLink onClick={() => goTo('navigation')}>Home</MenuLink>
                  <MenuLink onClick={() => goTo('about')}>About</MenuLink>
                  <MenuLink onClick={() => goTo('showcase')}>Showcase</MenuLink>
                  <MenuLink onClick={() => goTo('faq')}>FAQ</MenuLink>
                  <MenuLink onClick={() => goTo('footer')}>Footer</MenuLink>
               </Menu>
            </Container>

            <Bottom>
               <span>
                  &copy; {new Date().getFullYear()} Vida y esencias All rights
                  reserved.
               </span>

               <span>
                  Made with <div className="beat">💓</div> by &nbsp;
                  <a href=" " target="_blank" rel="noopener noreferrer">
                     A-rielox
                  </a>
               </span>
            </Bottom>
         </Wrapper>
      </ThemeProvider>
   );
};

export default Footer;

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

const beat = keyframes`
   from {  transform:  scale(1) }
   to {  transform:  scale(1.5) }
`;

const Wrapper = styled.div`
   background-color: ${props => props.theme.body};
   color: ${props => props.theme.text};

   min-height: 100vh;
   width: 100vw;
   position: relative;

   display: flex;
   flex-direction: column;
`;

const Container = styled.article`
   width: 75%;
   max-width: 1300px;
   padding-top: 2rem;
   padding-bottom: 2rem;
   margin: 2rem auto;

   display: flex;
   justify-content: space-between;
   align-items: center;

   border-bottom: 1px solid ${props => props.theme.text};
`;

const Left = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;

   @media (max-width: 48em) {
      width: 100%;
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

const Bottom = styled.div`
   width: 75%;
   max-width: 1300px;
   margin: 0 auto;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding-top: 1rem;

   a {
      text-decoration: underline;
   }

   .beat {
      display: inline-block;
      animation: ${beat} 0.8s linear infinite alternate;
   }

   @media (max-width: 48em) {
      flex-direction: column;
      width: 100%;

      span {
         margin-bottom: 1rem;
      }
   }
`;
