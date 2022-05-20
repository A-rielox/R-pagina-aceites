import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import oils from './sliderImages';

const Slider = () => {
   const [index, setIndex] = useState(0);

   useEffect(() => {
      const lastIndex = oils.length - 1;

      if (index > lastIndex) {
         setIndex(0);
      }
   }, [index]);

   useEffect(() => {
      let interval = setInterval(() => {
         setIndex(index + 1);
      }, 1000);

      return () => {
         clearInterval(interval);
      };
   }, [index]);

   return (
      <Wrapper>
         {oils.map((oil, oilIndex) => {
            const { id, image, name } = oil;

            let position = 'inactive';

            if (oilIndex === index) {
               position = 'active';
            }

            return (
               <article key={id} className={position}>
                  <img src={image} alt={name} className="person-img" />
               </article>
            );
         })}
      </Wrapper>
   );
};

export default Slider;

const Wrapper = styled.div`
   width: 100%;
   height: 100%;
   display: inline-block;

   article {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      transition: all 0.3s linear;
      /* height: 50%; */

      img {
         width: 100%;
      }
   }

   .active {
      opacity: 1;
   }
`;
