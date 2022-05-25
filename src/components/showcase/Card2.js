import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import gsap from 'gsap';

import { card2 } from './cardsContent';

const { id, title, desc1, img, svg, desc2 } = card2;

const Card2 = () => {
   const [opened, setOpened] = useState(false);

   const [tl] = useState(gsap.timeline({ paused: true }));

   let refCard1 = useRef(null);

   const animate = e => {
      tl.reversed(!tl.reversed());
      setOpened(!opened);
   };

   useEffect(() => {
      tl.to(refCard1, {
         ease: 'power4.easeInOut',
         width: '100vw',
         height: '100vh',
         backgroundColor: '#36254e',
         color: '#FFFFFF',
         top: 0,
         left: 0,
         margin: 0,
         duration: 0.5,
      }).reverse();
   }, []);
   return (
      <Article>
         <div
            className={`service-card${id}`}
            // onClick={animate}
            ref={el => (refCard1 = el)}
         >
            <div className="space">
               <span className="service-icon">{svg}</span>

               <div className="service-info">
                  <h4 className="title">{title}</h4>
                  <p className="desc1">{desc1}</p>

                  {/* <a href="products.html" className="btn service-btn">
               read more
            </a> */}

                  {/* <p className="desc2">{desc2}</p> */}
               </div>

               <button onClick={animate}>
                  {opened === false ? 'leer mas' : 'cerrar'}
               </button>
            </div>
         </div>
      </Article>
   );
};

export default Card2;

const Article = styled.article`
   /* position: relative; */

   display: flex;
   justify-content: flex-end;
   align-items: center;

   .service-card2 {
      width: 30vw;
      position: relative;
      top: 0;
      right: 0;

      /*  */
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;

      padding: 1rem;

      .space {
         background: ${props => props.theme.body};
         border-radius: 0.2rem;
         box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
         transition: all 0.2s linear;
         cursor: pointer;

         width: 100%;

         &:hover {
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
         }
      }
   }

   .service-icon {
      position: absolute;
      background: ${props => props.theme.text};
      padding: 1rem;
      border-radius: 50%;

      top: 50%;
      left: 0;
      transform: translateY(-50%);

      svg {
         fill: ${props => props.theme.body};
         width: 25px;
         height: 25px;
      }
   }

   .service-info {
      text-align: center;
      padding: 1rem 1rem 1rem 1rem;
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
