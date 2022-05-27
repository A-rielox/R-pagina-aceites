import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import Button from '../../components/common/Button';

const TypeWriter = () => {
   return (
      <Wrapper>
         <Title>Vida y Esencias</Title>

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

         <ButtonDiv>
            <Button
               useTheme="dark"
               text="Únete"
               link="/"
               fontSize="2rem"
               padding="1.3rem 3rem"
            />
         </ButtonDiv>
      </Wrapper>
   );
};

export default TypeWriter;

const Wrapper = styled.article`
   /* border: 1px solid black; */
   font-size: ${props => props.theme.fSizeBanner};
   /* text-transform: capitalize; */
   width: 100%;
   color: ${props => props.theme.text};
   align-self: flex-start;

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
`;

const Title = styled.h2`
   margin-bottom: 2rem;
`;

const ButtonDiv = styled.div`
   margin-top: 2rem;
   text-align: center;
`;
