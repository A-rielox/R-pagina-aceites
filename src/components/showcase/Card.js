import React from 'react';
import styled from 'styled-components';

const Cards = ({ cardContent }) => {
   console.log(cardContent);
   const { id, title, desc1, svg } = cardContent;

   return (
      <Wrapper className="CARD--WRAPPER">
         <div className="service-card">
            <div className="space">
               <div className="service-info">
                  <h4 className="title">{title}</h4>
                  <p className="desc1">{desc1}</p>

                  <span className="service-icon">{svg}</span>
               </div>
            </div>
         </div>
      </Wrapper>
   );
};

export default Cards;

const Wrapper = styled.div`
   display: flex;
   justify-content: flex-end;
   align-items: center;
   width: 100%;
   height: 100%;

   .service-card {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem;
   }

   .space {
      background: ${props => props.theme.body};
      border-radius: 0.2rem;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      transition: all 0.2s linear;
      cursor: pointer;
      width: 100%;
      height: 100%;

      &:hover {
         box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      }
   }

   .service-info {
      text-align: center;
      padding: 1rem 1rem 1rem 1rem;
      position: relative;
      width: 100%;
      height: 100%;
   }

   .title {
      position: relative;
   }

   .desc1 {
   }

   .saber {
      position: absolute;
      right: 5px;
      bottom: 5px;
      color: ${props => `rgba(${props.theme.textRgba}, 0.4)`};
      z-index: 2;
   }

   .service-icon {
      position: absolute;
      background: ${props => props.theme.text};
      padding: 1rem;
      border-radius: 50%;

      top: 50%;
      left: 0;
      transform: translate(-50%, -50%);

      svg {
         fill: ${props => props.theme.body};
         width: 25px;
         height: 25px;
      }
   }

   /* el boton tiene clases por defautl con btn "class="btn service-btn"" y  pa cambiarle usa la otra "service-btn" */
   .service-btn {
      font-size: 0.75rem;
      text-transform: capitalize;
      padding: 0.375rem 1.5rem;
      border-radius: 0.5rem;
      font-weight: 400;
      margin-top: 1.25rem;
   }
`;
