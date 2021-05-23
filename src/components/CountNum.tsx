import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { mixin } from '../styles/mixin';

const DURATION = 4000;

export interface ICountDataProps {
  maxCount: number;
  countTitle: string;
  countSubTitle: string;
}
const CountNum = ({ maxCount, countTitle, countSubTitle }: ICountDataProps) => {
  const [countValue, setCountValue] = useState(0);

  useEffect(() => {
    const time = Math.floor(DURATION / maxCount);
    const useInterval = setInterval(() => {
      if (countValue < maxCount) {
        setCountValue(countValue + 1);
      }
    }, time);
    return () => clearInterval(useInterval);
  }, [countValue, maxCount]);

  return (
    <React.Fragment>
      <Count>
        {countValue}만 {countTitle === '명' ? '명' : '개'}
      </Count>
      <Trip>{countSubTitle}</Trip>
    </React.Fragment>
  );
};

export default CountNum;

const Count = styled.strong`
  ${mixin.fontSet('#3A3A3A', '36px', 'bold')};
`;

const Trip = styled.span`
  ${mixin.fontSet('#3A3A3A', '36px', '400')};
`;
