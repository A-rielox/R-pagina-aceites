import React from 'react';
import styled from 'styled-components';
import cardsContent from './cardsContent';

const Cards = () => {
   return (
      <Wrapper className="CARDS--WRAPPER">
         {cardsContent.map(card => {
            const { id, title, desc, img, svg } = card;

            return (
               <article key={id} className="service-card">
                  <span className="service-icon">{svg}</span>

                  <div className="service-info">
                     <h4>{title}</h4>

                     <p>{desc}</p>

                     {/* <a href="products.html" className="btn service-btn">
                        read more
                     </a> */}
                  </div>
               </article>
            );
         })}
      </Wrapper>
   );
};

export default Cards;

const Wrapper = styled.div`
   display: flex;
   justify-content: space-around;
   align-items: center;

   cursor: pointer;
   flex-direction: column;

   .service-card {
      background: ${props => props.theme.body};
      border-radius: 0.5rem;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      transition: all 0.3s linear;
      /* overflow: hidden; en lugar de esta pa los bordes superiores de la img, maneja los bordes individuales en .service-img */

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
