'use client'

import { useEffect, useState } from 'react';

export function NumberAnimation({ originalNumber, sign }) {
  const [animatedNumber, setAnimatedNumber] = useState(0);
  const [isAnimationEnabled, setAnimationEnabled] = useState(
    window.innerWidth > 1024
  );

  useEffect(() => {
    if (!isAnimationEnabled) {
        setAnimatedNumber(originalNumber); 
        return;
      }

    const difference = originalNumber - animatedNumber;
    const step = Math.ceil(difference / 25); 

    const intervalId = setInterval(() => {
      setAnimatedNumber((prevNumber) =>
        prevNumber + step < originalNumber ? prevNumber + step : originalNumber
      );
    }, 20); 

    return () => clearInterval(intervalId);
  }, [originalNumber]);

  const formattedNumber = animatedNumber.toLocaleString('en-US');

  return <h4>{formattedNumber}{sign}</h4>;
};

