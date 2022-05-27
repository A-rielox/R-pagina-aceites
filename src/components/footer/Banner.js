import React from 'react';
import styled from 'styled-components';

import img1 from '../../assets/images/oil1.png';
import img2 from '../../assets/images/oil2.png';
import img3 from '../../assets/images/oil3.png';
import img4 from '../../assets/images/oil4.png';
import img5 from '../../assets/images/oil5.png';
import img6 from '../../assets/images/oil6.png';

import Button from '../common/Button';

const Banner = () => {
   return (
      <Wrapper className="BANNERRR">
         <OilPictures>
            <img width={500} height={400} src={img1} alt="The Weirdos" />
            <img width={500} height={400} src={img2} alt="The Weirdos" />
            <img width={500} height={400} src={img3} alt="The Weirdos" />

            <img width={500} height={400} src={img4} alt="The Weirdos" />
            <img width={500} height={400} src={img5} alt="The Weirdos" />
            <img width={500} height={400} src={img6} alt="The Weirdos" />
         </OilPictures>

         <div className="cap-width">
            <Title>
               Únete a <br /> la comunidad
            </Title>

            <ButtonDiv>
               <Button
                  useTheme="light"
                  text="Únete"
                  link="/"
                  fontSize="2rem"
                  padding="1.3rem 3rem"
               />
            </ButtonDiv>
         </div>
      </Wrapper>
   );
};

export default Banner;

const Wrapper = styled.section`
   width: 100vw;
   height: 25rem;
   position: relative;
   border-top: 2px solid ${props => props.theme.text};

   background-color: ${props => `rgba(${props.theme.textRgba},0.9)`};

   display: flex;
   justify-content: center;
   align-items: center;

   overflow: hidden;

   @media screen and (max-width: 1100px) {
      height: 40vh;
   }

   .cap-width {
      width: 100%;
      max-width: 1300px;
      margin: 0 auto;

      display: flex;
      justify-content: space-between;
      align-items: center;

      @media screen and (max-width: 600px) {
         flex-direction: column;
      }
   }

   @media screen and (max-width: 600px) {
      height: 15rem;
      flex-direction: column;
   }
`;

const OilPictures = styled.div`
   width: 100%;
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);

   display: flex;
   justify-content: center;
   align-items: center;
   opacity: 0.2;

   img {
      width: 15rem;
      height: auto;
   }

   @media screen and (max-width: 600px) {
      img {
         width: 10rem;
         height: auto;
      }
   }
`;

const Title = styled.h2`
   font-size: ${props => props.theme.fSizeBanner};
   color: ${props => props.theme.body};
   padding: 1rem 2rem;
   z-index: 10;
   width: 70%;
   text-transform: capitalize;

   text-shadow: 1px 1px 2px ${props => props.theme.text};

   @media screen and (max-width: 900) {
      font-size: ${props => props.theme.fSizeTitle};
      text-align: center;
      /* width: 40%; */
   }
   @media screen and (max-width: 600) {
      font-size: ${props => props.theme.fSizeNormal};
      padding: 2rem 0;

      width: 100%;
   }
`;

const ButtonDiv = styled.div`
   width: 30%;
   margin-top: 2rem;
   text-align: center;

   @media screen and (max-width: 900) {
   }
`;
