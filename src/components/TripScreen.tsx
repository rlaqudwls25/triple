import React from 'react';
import styled from 'styled-components';
import { mixin } from '../styles/mixin';
import { COUNT_DATA } from '../data/Count';
import CountNum from './CountNum';

export interface ITripScreenProps {
  fadeInOne: object;
  fadeInTwo: object;
}

export const TripScreen = ({ fadeInOne, fadeInTwo }: ITripScreenProps) => {
  return (
    <>
      <ImageCotent {...fadeInOne}>
        {new Date().getFullYear()}년 {new Date().getMonth()}월 기준
      </ImageCotent>
      <TripContent {...fadeInTwo}>
        {COUNT_DATA.map(item => {
          const { id, maxCount, countTitle, countSubTitle } = item;
          return (
            <TravlerContent key={id}>
              <CountNum
                maxCount={maxCount}
                countTitle={countTitle}
                countSubTitle={countSubTitle}
              />
            </TravlerContent>
          );
        })}
      </TripContent>
    </>
  );
};

const ImageCotent = styled.div`
  position: absolute;
  width: 400px;
  height: 330px;
  padding-top: 280px;
  top: 150px;
  background-size: 400px 338px;
  background-image: url(/Images/triple@2x.png);
  background-repeat: no-repeat;
  text-align: center;
  ${mixin.fontSet('rgba(58,58,58,0.7)', '15px')};
`;

const TripContent = styled.div`
  margin-left: 623px;
  padding-top: 150px;
`;

const TravlerContent = styled.div`
  margin-bottom: 20px;
  letter-spacing: -1px;
`;
