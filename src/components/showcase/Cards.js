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
                  <div className="service-img-container">
                     <img src={img} alt={title} className="service-img" />

                     <span className="service-icon">{svg}</span>
                  </div>

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

   .service-card {
      /* margin: 2rem 0; */
      background: #f1f5f8;
      border-radius: 0.5rem;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      transition: all 0.3s linear;
      /* overflow: hidden; en lugar de esta pa los bordes superiores de la img, maneja los bordes individuales en .service-img */

      width: 30%;
   }

   .service-card:hover {
      transform: scale(1.02);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
   }

   .service-img {
      height: 15rem;
      object-fit: cover; /* pa q no se distorsione por el height fijo */
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;

      width: 100%;
      display: block;
      object-fit: cover;
   }

   .service-info {
      text-align: center;
      padding: 3rem 1rem 2.5rem 1rem;
   }

   .service-info p {
      max-width: 20rem;
      color: #617d98;
      margin: 0 auto;
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

   /* @media screen and (min-width: 768px) {
      .service-card {
         float: left;
         width: 45%;
         margin-right: 5%;
      }
   }

   @media screen and (min-width: 992px) {
      .service-card {
         width: 30%;
         margin-right: 3.33%;
      }
   } */

   /* el icono se pone al final del container de la imagen pa mandarlo facil al fondo de la imagen */
   .service-img-container {
      position: relative;
   }

   .service-icon {
      position: absolute;
      left: 50%;
      bottom: 0;
      font-size: 2rem;
      color: #678e3e;
      background: #beed8c;
      padding: 0.25rem 0.6rem;
      border-radius: 50%;

      transform: translate(-50%, 50%);
      border: 0.375rem solid #f1f5f8;
   }
`;
