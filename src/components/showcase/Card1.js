import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import gsap from 'gsap';

import { card1 } from './cardsContent';

const { id, title, desc1, img, svg, desc2 } = card1;

const Card1 = ({ textRef }) => {
   const [opened, setOpened] = useState(false);

   const [tl] = useState(gsap.timeline({ paused: true }));

   let refCard1 = useRef(null);

   const animate = e => {
      tl.reversed(!tl.reversed());
      setOpened(!opened);
   };

   useEffect(() => {
      if (textRef) {
         tl.to(refCard1, {
            ease: 'power4.easeInOut',
            width: '100%',
            height: '100%',
            backgroundColor: '#36254e',
            borderRadius: '0.2rem',
            color: '#FFFFFF',
            top: 0,
            left: 0,
            margin: 0,
            duration: 0.5,
         })
            .to(textRef, { height: 0, duration: 0.5 }, 0.01)
            .to(
               '.space',
               {
                  backgroundColor: 'transparent',
                  boxShadow: 'none',
                  duration: 0.1,
               },
               0.01
            )
            .to(
               '.title',
               {
                  top: 0,
                  duration: 0.5,
               },
               0.01
            )
            .to(
               '.desc1',
               {
                  color: 'transparent',
                  duration: 0.5,
               },
               0.01
            )
            .to(
               '.saber',
               {
                  color: 'rgba(255, 255, 255, 0.4)',
                  top: '5px',
                  duration: 0.5,
               },
               0.01
            )
            .to(
               '.service-icon',
               {
                  width: 0,
                  height: 0,
                  duration: 0.5,
               },
               0.01
            )
            .to(
               '.service-icon svg',
               {
                  width: 0,
                  height: 0,
                  duration: 0.5,
               },
               0.01
            )
            .to('.desc2', {
               visibility: 'visible',
               opacity: 1,
               duration: 0.5,
            })
            .reverse();
      }
   }, [textRef]);
   //
   return (
      <Article>
         <div
            className={`service-card${id}`}
            // onClick={animate}
            ref={el => (refCard1 = el)}
         >
            <div className="space">
               <div className="service-info">
                  <h4 className="title">{title}</h4>
                  <p className="desc1">{desc1}</p>

                  <p className="saber" onClick={animate}>
                     {opened === false ? 'saber +' : 'saber -'}
                  </p>
                  <span className="service-icon">{svg}</span>

                  <p className="desc2">{desc2}</p>
               </div>

               {/* <button onClick={animate}>
                  {opened === false ? 'leer mas' : 'cerrar'}
               </button> */}
            </div>
         </div>

         {/* <img className="img" src={img} alt="comoUsar" /> */}
      </Article>
   );
};

export default Card1;

const Article = styled.article`
   display: flex;
   justify-content: flex-end;
   align-items: center;
   width: 100%;
   height: 100%;

   /* 🔥 */
   .background {
      position: absolute;
      /* z-index: -1; */
      width: 0%;
      height: 0%;

      /* disable scroll */
      /* height: 100%; */
      overflow: hidden;
   }

   .img {
      position: absolute;
   }

   .desc2 {
      position: absolute;
      visibility: hidden;
      opacity: 0;
   }

   .service-card1 {
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
