import React from 'react';
import styled from 'styled-components';

const Button = ({ text, link, fontSize, padding }) => {
   return (
      <a href={link} aria-label={text} target="_blank" rel="noreferrer">
         <Btn fontSize={fontSize} padding={padding}>
            {text}
         </Btn>
      </a>
   );
};

export default Button;

const Btn = styled.button`
   cursor: pointer;
   display: inline-block;
   background-color: ${props => props.theme.text};
   color: ${props => props.theme.body};
   outline: none;
   border: none;

   /* font-size: 1rem; */
   font-size: ${props => props.fontSize};
   /* padding: 0.9rem 2.3rem; */
   padding: ${props => props.padding};
   border-radius: 50px;
   transition: ${props => props.theme.transition};
   position: relative;

   &:hover {
      transform: scale(0.9);
      border-radius: 5px;
      font-weight: bold;
   }

   &::after {
      content: ' ';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      border: 2px solid ${props => props.theme.text};
      width: 100%;
      height: 100%;
      border-radius: 5px;
      transition: ${props => props.theme.transition};
   }

   &:hover::after {
      transform: translate(-50%, -50%) scale(1);
      width: 120%;
      height: 150%;
   }
`;
