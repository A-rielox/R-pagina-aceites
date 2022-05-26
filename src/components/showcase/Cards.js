import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
// import cardsContent from './cardsContent';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';

const Cards = ({ textRef }) => {
   return (
      <Wrapper className="CARDS--WRAPPER">
         <Card1 textRef={textRef} />
         {/* <Card2 /> */}
         {/* <Card3 /> */}
      </Wrapper>
   );
};

export default Cards;

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;

   width: 100%;
   height: 100%;
   /* justify-content: space-around; */
   /* align-items: center; */

   /* 
   .service-card {
      background: ${props => props.theme.body};
      border-radius: 0.5rem;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      transition: all 0.3s linear;

      width: 100%;
      position: relative;
      margin-top: 1rem;
      margin-left: 2rem;
   }

   .service-card:hover {
      transform: scale(1.02);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
   }

   .service-icon {
      position: absolute;
      top: 50%;
      left: 0;
      background: ${props => props.theme.text};
      padding: 0.6rem;
      border-radius: 50%;

      transform: translate(-50%, -50%);
      border: 0.375rem solid #f1f5f8;

      svg {
         fill: ${props => props.theme.body};
         width: 25px;
         height: 25px;
      }
   }

   .service-info {
      text-align: center;
      padding: 1rem 1rem 1rem 1rem;

      p {
         max-width: 20rem;
         color: #617d98;
         margin: 0 auto;
      }
   }

   
   .service-btn {
      font-size: 0.75rem;
      text-transform: capitalize;
      padding: 0.375rem 1.5rem;
      border-radius: 0.5rem;
      font-weight: 400;
      margin-top: 1.25rem;
   } */
`;
