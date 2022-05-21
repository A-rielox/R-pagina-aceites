import React, { useRef, useLayoutEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { DarkTheme } from '../styles/Themes';

// import content from '../components/about/content';

import mejora from '../assets/images/mejora.jpg';
import purifica from '../assets/images/purifica.jpg';
import realza from '../assets/images/realza.jpg';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const About = () => {
   gsap.registerPlugin(ScrollTrigger);

   const ref = useRef(null);
   const horizontalRef = useRef(null);
   const oneSlide = useRef(null);

   useLayoutEffect(() => {
      let element = ref.current;
      let scrollingElement = horizontalRef.current;
      let oneSlideElement = oneSlide.current;

      let pinWrapWidth = scrollingElement.offsetWidth;
      let twoSlides = oneSlideElement.offsetWidth * 2;

      let t1 = gsap.timeline();

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
            ease: 'none,',
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
            ease: 'none,',
         });

         ScrollTrigger.refresh();
      }, 1000);
   }, []);

   return (
      <ThemeProvider theme={DarkTheme}>
         <Wrapper id="about" ref={ref}>
            <SlidesWrapper ref={horizontalRef}>
               <Slide className="panel" ref={oneSlide}>
                  <div className="left">
                     <img className="img" src={mejora} alt="mejora" />
                  </div>

                  <div className="right">
                     <div className="title">Mejora Tu Bienestar Físico</div>

                     <p className="text">
                        <span className="firstLetter">L</span>os estilos de vida
                        modernos no siempre favorecen las condiciones óptimas
                        para el bienestar físico. Una dieta deficiente, la falta
                        de ejercicio y una saturación de tóxicos ambientales
                        pueden dejar el cuerpo desequilibrado y disminuir los
                        niveles de energía.
                     </p>
                     <p className="text">
                        Desde el control del peso hasta el soporte de
                        suplementos, nuestros aceites esenciales y productos
                        enriquecidos con aceites esenciales pueden proporcionar
                        las soluciones específicas que necesitas para
                        restablecer el equilibrio y sentirte mejor.
                     </p>
                  </div>
               </Slide>

               <Slide className="panel">
                  <div className="left">
                     <img className="img" src={purifica} alt="purifica" />
                  </div>

                  <div className="right">
                     <div className="title">Purifica tu hogar</div>

                     <p className="text">
                        <span className="firstLetter">L</span>os productos que
                        usamos en nuestros hogares impactan nuestra salud y
                        bienestar. El compromiso de Young Living con los
                        productos a base de plantas de origen natural facilita
                        la elección de limpiadores, productos para el cuidado
                        personal y otros artículos para el hogar formulados sin
                        el uso de químicos dañinos que se encuentran en muchos
                        productos tradicionales.
                     </p>
                     <p className="text">
                        Nos apasiona usar solo los mejores ingredientes que son
                        buenos para la salud y responsables con el medio
                        ambiente, y a la misma vez efectivos.
                     </p>
                  </div>
               </Slide>

               <Slide className="panel">
                  <div className="left">
                     <img className="img" src={realza} alt="realza" />
                  </div>

                  <div className="right">
                     <div className="title">Realza tu rutina de belleza</div>

                     <p className="text">
                        <span className="firstLetter">E</span>limina los
                        ingredientes agresivos de tus productos de cuidado
                        personal y deja que tu belleza brille. ¡Te enamorarás de
                        la amplia gama de aceites esenciales que ayudan a
                        mantener la piel con un aspecto claro, aumentan la
                        hidratación y te dan ese brillo juvenil! ¡Los aceites
                        esenciales incluso pueden ayudar a que tu cabello se vea
                        fabuloso!
                     </p>
                     <p className="text">
                        Utilizando ingredientes de origen natural, nuestras
                        soluciones avanzadas para el cuidado de la piel y el
                        cabello facilitan el disfrute de los hermosos beneficios
                        de los aceites esenciales todos los días.
                     </p>
                  </div>
               </Slide>
            </SlidesWrapper>
         </Wrapper>
      </ThemeProvider>
   );
};

export default About;

const Slide = styled.div`
   height: 100vh;
   width: 100vw;

   display: flex;
   justify-content: center;
   align-items: center;

   padding: 5rem;

   .left {
      width: 50%;

      display: flex;
      justify-content: center;
      align-items: center;
   }

   .right {
      width: 50%;

      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;

      padding: 2rem;
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
`;
