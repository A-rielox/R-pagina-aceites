import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import Button from '../../components/common/Button';

const TypeWriter = () => {
   let titleRef = useRef(null);
   let typeWriterRef = useRef(null);
   let subTitleRef = useRef(null);
   let buttonRef = useRef(null);

   let tl2 = gsap.timeline();

   useEffect(() => {
      tl2.to('.text-wrapper, .button-div', { visibility: 'visible' })
         .from(
            [titleRef.children, typeWriterRef.children, subTitleRef.children],
            { y: 120, ease: 'power2', duration: 1, stagger: 0.4 }
         )
         .from(
            buttonRef,
            { x: -150, opacity: 0, ease: 'power2', duration: 1 },
            1
         );

      return () => {
         tl2.kill();
      };
   }, []);

   return (
      <Wrapper>
         <div className="text-wrapper" ref={el => (titleRef = el)}>
            <div className="title">Vida y Esencias</div>
         </div>

         <div className="text-wrapper" ref={el => (typeWriterRef = el)}>
            <Typewriter
               options={{
                  autoStart: true,
                  loop: true,
               }}
               onInit={typewriter => {
                  typewriter
                     .typeString(`<span class="text-1">Estilo de vida.</span>`)
                     .pauseFor(2000)
                     .deleteAll()
                     .typeString(`<span class="text-2">Salud.</span>`)
                     .pauseFor(2000)
                     .deleteAll()
                     .typeString(`<span class="text-3">Comunidad.</span>`)
                     .pauseFor(2000)
                     .deleteAll()
                     .start();
               }}
            />
         </div>

         <div className="text-wrapper" ref={el => (subTitleRef = el)}>
            <div className="subtitle">Se parte de nosotras.</div>
         </div>

         <div className="button-div" ref={el => (buttonRef = el)}>
            <Button
               useTheme="dark"
               text="Únete"
               link="/"
               fontSize="2rem"
               padding="1.3rem 3rem"
            />
         </div>
      </Wrapper>
   );
};

export default TypeWriter;

const Wrapper = styled.article`
   /* border: 1px solid black; */
   font-size: calc(2rem + 1vw);
   /* text-transform: capitalize; */
   width: 100%;
   color: ${props => props.theme.text};
   align-self: flex-start;

   @media screen and (max-width: 900px) {
      font-size: ${props => props.theme.fSizeTitle};
   }

   span {
      font-family: ${props => props.theme.ffTitle};
   }
   .text-1 {
      color: #6e4a9e;
   }
   .text-2 {
      color: #14c078;
   }
   .text-3 {
      color: #9c2816;
   }

   .title {
      margin-bottom: 2rem;
      /* font-size: calc(2rem + 1vw); */

      @media screen and (max-width: 900px) {
         font-size: ${props => props.theme.fSizeBanner};
      }
   }

   .subtitle {
      margin-top: 1rem;
      font-size: calc(1rem + 1vw);
      color: ${props => `rgba(${props.theme.textRgba}, 0.4)`};

      @media screen and (max-width: 900px) {
         font-size: ${props => props.theme.fSizeNormal};
      }
   }

   .text-wrapper {
      overflow: hidden;
      visibility: hidden;
   }

   .button-div {
      margin-top: 2rem;
      text-align: center;
      visibility: hidden;
   }
`;
