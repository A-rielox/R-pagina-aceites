import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Logo = () => {
   return (
      <Wrapper>
         <Link to="/">V. E.</Link>
      </Wrapper>
   );
};

export default Logo;

const Wrapper = styled.h2`
   font-family: ${props => props.theme.ffTitle};
   font-size: calc(2em + 1vw);

   transition: ${props => props.theme.transition};

   @media screen and (max-width: 900px) {
      font-size: calc(1.5em + 1vw);
   }

   &:hover {
      transform: scale(1.1);
   }
`;
