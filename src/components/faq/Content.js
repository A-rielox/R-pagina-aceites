import React from 'react';

import styled from 'styled-components';
import { motion } from 'framer-motion';

const Content = ({ thecontent, useTheme }) => {
   const { id, title, img, svg, desc2 } = thecontent;

   return (
      <Slide className="panel" useTheme={useTheme}>
         <motion.div
            className="left"
            initial={{ filter: 'grayscale(100%)' }}
            whileInView={{ filter: 'grayscale(0%)' }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 'all' }}
         >
            <img className="img" src={img} alt="mejora" />
         </motion.div>

         <div className="right">
            <div className="title-wrapper">
               <motion.div
                  className="title"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: false, amount: 'all' }}
               >
                  {title}
               </motion.div>

               <motion.span
                  className="service-icon"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                  viewport={{ once: false, amount: 'all' }}
               >
                  {svg}
               </motion.span>
            </div>

            <motion.p
               className="text"
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 1.5 }}
               viewport={{ once: false, amount: 0.7 }}
            >
               <span className="firstLetter">{desc2.charAt(0)}</span>
               {desc2.substring(1)}
            </motion.p>
         </div>
      </Slide>
   );
};

/* desc2.charAt(0) === '¡' || desc2.charAt(0) === '¿' */
export default Content;

const Slide = styled.div`
   height: 100vh;
   width: 100vw;

   display: flex;
   justify-content: center;
   align-items: center;

   /* padding: 5rem; */

   .left {
      width: 30%;

      display: flex;
      justify-content: center;
      align-items: center;

      @media screen and (max-width: 900px) {
         display: none;
      }
   }

   .right {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      width: 70%;
      align-items: center;
      padding: 2rem;

      position: relative;

      @media screen and (min-width: 1100px) {
         padding-left: 4rem;
      }
   }

   .title-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;

      margin-bottom: 2rem;
      width: 100%;
   }

   .service-icon {
      background: ${props =>
         props.useTheme === 'dark' ? props.theme.text : props.theme.body};
      padding: 1rem;
      border-radius: 50%;
      opacity: 0.3;

      svg {
         fill: ${props =>
            props.useTheme === 'dark' ? props.theme.body : props.theme.text};
         width: 60px;
         height: 60px;
         opacity: 0.3;
      }
   }

   .title {
      font-family: ${props => props.theme.ffTitle};
      font-size: ${props => props.theme.fSizeBanner};

      margin-left: 2rem;
   }

   .text {
      font-size: ${props => props.theme.fSizeNormal};
      margin-bottom: 1rem;
      letter-spacing: 1px;
      line-height: 1.75;

      .firstLetter {
         background: ${props =>
            props.useTheme === 'dark' ? props.theme.text : props.theme.body};

         color: ${props =>
            props.useTheme === 'dark' ? props.theme.body : props.theme.text};

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
