import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

import img1 from '../../assets/images/home1.jpg';
import img2 from '../../assets/images/home2.jpg';

const HeroImages = () => {
   let images = useRef(null);

   let tl1 = gsap.timeline();

   useEffect(() => {
      const oil = images.firstElementChild;
      const girl = images.lastElementChild;

      tl1.to(images, { visibility: 'visible' })
         .from(
            oil,
            {
               x: '60vw',
               ease: 'power2',
               duration: 1.2,
            },
            'Start'
         )
         .from(
            oil.firstElementChild,
            {
               scale: 1.6,
               filter: 'grayscale(100%)',
               ease: 'power2',
               duration: 1.2,
            },
            1
         )
         .from(
            girl,
            {
               y: '60vw',
               ease: 'power2',
               duration: 1.2,
            },
            'Start'
         )
         .from(
            girl.firstElementChild,
            {
               scale: 1.6,
               filter: 'grayscale(100%)',
               ease: 'power2',
               duration: 1.2,
            },
            1
         );
   }, []);

   return (
      <Wrapper>
         <div className="hero-images" ref={el => (images = el)}>
            <div className="image oil">
               <img className="img" src={img1} alt="oil" />
            </div>

            <div className="image girl">
               <img className="img" src={img2} alt="girl" />
            </div>
         </div>
      </Wrapper>
   );
};

export default HeroImages;

const Wrapper = styled.section`
   width: 100%;
   height: 100%;

   display: flex;
   justify-content: center;
   align-items: center;

   .hero-images {
      visibility: hidden;
      position: relative;

      /* flex-direction: column; */

      width: 100%;
      height: 70%;
   }

   .image {
      position: absolute;
      overflow: hidden;

      &.oil {
         top: 0;
         left: -50px;

         width: 100%;
         height: auto;
      }

      &.girl {
         top: 25%;
         right: 0px;

         width: 65%;
         height: auto;
      }
   }
`;
