import React, { useRef, useLayoutEffect, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { DarkTheme } from '../styles/Themes';

// import content from '../components/about/content';

import mejora from '../assets/images/mejora.jpg';
import purifica from '../assets/images/purifica.jpg';
import realza from '../assets/images/realza.jpg';

import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Beneficios = ({ ancho }) => {
   gsap.registerPlugin(ScrollTrigger);

   const ref = useRef(null);
   const horizontalRef = useRef(null);
   const oneSlide = useRef(null);

   useLayoutEffect(() => {
      const mq = window.matchMedia('(min-width: 900px)').matches;
      console.log(mq);

      let element = ref.current;
      let scrollingElement = horizontalRef.current;
      let oneSlideElement = oneSlide.current;

      let pinWrapWidth = scrollingElement.offsetWidth;
      let twoSlides = oneSlideElement.offsetWidth * 2;

      let t1 = gsap.timeline();

      if (mq) {
         setTimeout(() => {
            t1.to(element, {
               scrollTrigger: {
                  trigger: element,
                  start: 'top top',
                  end: pinWrapWidth,
                  scrub: true,
                  pin: true,
                  pinSpacing: true,
                  // markers: true,
               },

               height: `${pinWrapWidth}px`,
               ease: 'none',
            });

            // Horizontal Scrolling
            t1.to(scrollingElement, {
               scrollTrigger: {
                  trigger: scrollingElement,
                  start: 'top top',
                  end: pinWrapWidth,
                  scrub: true,
                  // markers:true,
               },
               x: -twoSlides,
               ease: 'none',
            });

            ScrollTrigger.refresh();
         }, 1000);
      }

      return () => {
         // Let's clear instances
         t1.kill();
      };
   }, []);

   return (
      <ThemeProvider theme={DarkTheme}>
         <Wrapper id="about" ref={ref}>
            <SlidesWrapper ref={horizontalRef} className="SLIDES----WRAPPER">
               <Slide className="panel" ref={oneSlide}>
                  <div className="cap-width">
                     <motion.div
                        className="left"
                        initial={{ filter: 'grayscale(100%)' }}
                        whileInView={{ filter: 'grayscale(0%)' }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false, amount: 'all' }}
                     >
                        <img className="img" src={mejora} alt="mejora" />
                     </motion.div>

                     <div className="right">
                        <motion.div
                           className="title"
                           initial={{ opacity: 0 }}
                           whileInView={{ opacity: 1 }}
                           transition={{ duration: 1.5 }}
                           viewport={{ once: false, amount: 'all' }}
                        >
                           Mejora Tu Bienestar Físico
                        </motion.div>

                        <motion.p
                           className="text"
                           initial={{ opacity: 0 }}
                           whileInView={{ opacity: 1 }}
                           transition={{ duration: 1.5 }}
                           viewport={{ once: false, amount: 'all' }}
                        >
                           <span className="firstLetter">L</span>os estilos de
                           vida modernos no siempre favorecen las condiciones
                           óptimas para el bienestar físico. Una dieta
                           deficiente, la falta de ejercicio y una saturación de
                           tóxicos ambientales pueden dejar el cuerpo
                           desequilibrado y disminuir los niveles de energía.
                        </motion.p>

                        <motion.p
                           className="text"
                           initial={{ opacity: 0 }}
                           whileInView={{ opacity: 1 }}
                           transition={{ duration: 1.5, delay: 0.3 }}
                           viewport={{ once: false, amount: 'all' }}
                        >
                           Desde el control del peso hasta el soporte de
                           suplementos, nuestros aceites esenciales y productos
                           enriquecidos con aceites esenciales pueden
                           proporcionar las soluciones específicas que necesitas
                           para restablecer el equilibrio y sentirte mejor.
                        </motion.p>
                     </div>
                  </div>
               </Slide>

               <Slide className="panel slide2">
                  <div className="cap-width">
                     <motion.div
                        className="left"
                        initial={{ filter: 'grayscale(100%)' }}
                        whileInView={{ filter: 'grayscale(0%)' }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false, amount: 'all' }}
                     >
                        <img className="img" src={purifica} alt="purifica" />
                     </motion.div>

                     <div className="right">
                        <motion.div
                           className="title"
                           initial={{ opacity: 0 }}
                           whileInView={{ opacity: 1 }}
                           transition={{ duration: 1.5 }}
                           viewport={{ once: false, amount: 0.3 }}
                        >
                           Purifica tu hogar
                        </motion.div>

                        <motion.p
                           className="text"
                           initial={{ opacity: 0 }}
                           whileInView={{ opacity: 1 }}
                           transition={{ duration: 1.5 }}
                           viewport={{ once: false, amount: 0.3 }}
                        >
                           <span className="firstLetter">L</span>os productos
                           que usamos en nuestros hogares impactan nuestra salud
                           y bienestar. El compromiso de Young Living con los
                           productos a base de plantas de origen natural
                           facilita la elección de limpiadores, productos para
                           el cuidado personal y otros artículos para el hogar
                           formulados sin el uso de químicos dañinos que se
                           encuentran en muchos productos tradicionales.
                        </motion.p>

                        <motion.p
                           className="text"
                           initial={{ opacity: 0 }}
                           whileInView={{ opacity: 1 }}
                           transition={{ duration: 1.5, delay: 0.3 }}
                           viewport={{ once: false, amount: 0.3 }}
                        >
                           Nos apasiona usar solo los mejores ingredientes que
                           son buenos para la salud y responsables con el medio
                           ambiente, y a la misma vez efectivos.
                        </motion.p>
                     </div>
                  </div>
               </Slide>

               <Slide className="panel">
                  <div className="cap-width">
                     <motion.div
                        className="left"
                        initial={{ filter: 'grayscale(100%)' }}
                        whileInView={{ filter: 'grayscale(0%)' }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false, amount: 'all' }}
                     >
                        <img className="img" src={realza} alt="realza" />
                     </motion.div>

                     <div className="right">
                        <motion.div
                           className="title"
                           initial={{ opacity: 0 }}
                           whileInView={{ opacity: 1 }}
                           transition={{ duration: 1.5 }}
                           viewport={{ once: false, amount: 0.3 }}
                        >
                           Realza tu rutina de belleza
                        </motion.div>

                        <motion.p
                           className="text"
                           initial={{ opacity: 0 }}
                           whileInView={{ opacity: 1 }}
                           transition={{ duration: 1.5 }}
                           viewport={{ once: false, amount: 0.3 }}
                        >
                           <span className="firstLetter">E</span>limina los
                           ingredientes agresivos de tus productos de cuidado
                           personal y deja que tu belleza brille. ¡Te enamorarás
                           de la amplia gama de aceites esenciales que ayudan a
                           mantener la piel con un aspecto claro, aumentan la
                           hidratación y te dan ese brillo juvenil! ¡Los aceites
                           esenciales incluso pueden ayudar a que tu cabello se
                           vea fabuloso!
                        </motion.p>
                        <motion.p
                           className="text"
                           initial={{ opacity: 0 }}
                           whileInView={{ opacity: 1 }}
                           transition={{ duration: 1.5, delay: 0.3 }}
                           viewport={{ once: false, amount: 0.3 }}
                        >
                           Utilizando ingredientes de origen natural, nuestras
                           soluciones avanzadas para el cuidado de la piel y el
                           cabello facilitan el disfrute de los hermosos
                           beneficios de los aceites esenciales todos los días.
                        </motion.p>
                     </div>
                  </div>
               </Slide>
            </SlidesWrapper>
         </Wrapper>
      </ThemeProvider>
   );
};

export default Beneficios;

/* max-width: 1300px; */

const Slide = styled.div`
   height: 100vh;
   width: 100vw;

   display: flex;
   justify-content: center;
   align-items: center;

   padding: 5rem;

   @media screen and (max-width: 500px) {
      padding: 0.5rem;
   }

   .cap-width {
      max-width: 1300px;
      margin: 0 auto;

      display: flex;
      justify-content: center;
      align-items: center;
   }

   .left {
      width: 30%;

      display: flex;
      justify-content: center;
      align-items: center;

      overflow: hidden;

      @media screen and (max-width: 900px) {
         display: none;
      }
   }

   .right {
      width: 70%;

      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;

      padding: 2rem;

      @media screen and (min-width: 1100px) {
         padding-left: 4rem;
      }

      @media screen and (max-width: 700px) {
         width: 100%;
      }
   }

   .pic {
      /* border-radius: 15px; */
      /* width: 100%; */
      /* max-height: 75vh; */
      /* height: auto; */
   }

   .title {
      font-family: ${props => props.theme.ffTitle};
      font-size: ${props => props.theme.fSizeBanner};

      margin-bottom: 2rem;
      text-align: right;
   }

   .text {
      font-size: ${props => props.theme.fSizeNormal};
      margin-bottom: 1rem;
      letter-spacing: 1px;
      line-height: 1.75;

      .firstLetter {
         background: ${props => props.theme.text};
         color: ${props => props.theme.body};
         border-radius: 5px;
         font-size: 2rem;
         font-weight: 700;
         text-transform: uppercase;
         margin-left: 2rem;
         margin-right: 0.5rem;

         padding: 0.2rem 0.7rem;
         font-family: ${props => props.theme.ffTitle};
         line-height: 1;
         display: inline-block;
      }
   }
`;

const Wrapper = styled.div`
   background-color: ${props => props.theme.body};
   color: ${props => props.theme.text};

   min-height: 100vh;
   width: 100%;

   display: flex;
   justify-content: flex-start;
   align-items: flex-start;

   position: relative;
   position: relative;
   overflow: hidden;
`;

const SlidesWrapper = styled.div`
   display: flex;
   justify-content: flex-start;
   align-items: center;
   padding-right: 20rem;

   @media screen and (max-width: 900px) {
      display: block;
      justify-content: center;

      .slide2 {
         background-color: ${props => props.theme.text};
         color: ${props => props.theme.body};
      }
   }
`;
