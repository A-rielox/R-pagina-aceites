import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from '../styles/Themes';

import img from '../assets/images/fondo-what-are.jpg';

const WhatAre = () => {
   return (
      <ThemeProvider theme={lightTheme}>
         <Wrapper id="showcase" className="section">
            <Container>
               <Title>New Collection</Title>

               <Text>
                  The brand new collection is currently being developed in USA.
                  We create our products using best quality material, including
                  the use of some of the pure fabrics to make our products. All
                  products are made using the best materials, from the finest
                  cotton to the finest fabrics.
                  <br />
                  <br />
                  We have lots of different clothing options like shoes, jackets
                  and dresses. Not only clothes but we also provide unique
                  Jewellery as well. It is great for us to carry our new clothes
                  all around the country and look different.
               </Text>
            </Container>
         </Wrapper>
      </ThemeProvider>
   );
};

export default WhatAre;

const Wrapper = styled.div`
   color: ${props => props.theme.text};

   background-image: linear-gradient(
         rgba(252, 246, 244, 0.6),
         rgba(252, 246, 244, 0.6)
      ),
      url(${img});
   background-size: cover;
   background-repeat: no-repeat;
   /* background-attachment: fixed; lo hace parallax */
   background-position: center;
`;

const Container = styled.article`
   border: 2px solid black;

   width: 75%;
   /* min-height: 100vh; */
   padding-top: 2rem;
   padding-bottom: 2rem;

   display: flex;
   flex-direction: column;
   /* justify-content: space-between; */
   /* align-content: center; */
`;

const Title = styled.h2`
   font-family: ${props => props.theme.ffTitle};
   font-size: ${props => props.theme.fSizeBanner};

   /* text-shadow: 1px 1px 1px ${props => props.theme.body}; */
   /* top: 1rem; */
   /* left: 5%; */
`;

const Text = styled.div`
   /* width: 35%; */

   /* min-height: 100vh; */
   /* z-index: 5; */

   /* position: fixed; */
   /* left: 0; */
   display: flex;
   justify-content: center;
   align-items: center;
`;
