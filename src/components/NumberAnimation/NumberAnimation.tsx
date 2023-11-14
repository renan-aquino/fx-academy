'use client'

import { useEffect, useState } from 'react';

export function NumberAnimation({ originalNumber, sign }) {
  const [animatedNumber, setAnimatedNumber] = useState(0);
  const [isAnimationEnabled, setAnimationEnabled] = useState(
    typeof window !== 'undefined' && window.innerWidth > 1024
  );

  useEffect(() => {
    if (!isAnimationEnabled) {
      setAnimatedNumber(originalNumber);
      return
    } else {
      const startAnimation = () => {
        const difference = originalNumber - animatedNumber;
        const step = Math.ceil(difference / 25); 

        const intervalId = setInterval(() => {
          setAnimatedNumber((prevNumber) =>
            prevNumber + step < originalNumber ? prevNumber + step : originalNumber
          );
        }, 20); 

        return () => clearInterval(intervalId);
      }
    
      const delayTimeout = setTimeout(startAnimation, 500);
      return () => clearTimeout(delayTimeout);
    }
    }, [originalNumber, isAnimationEnabled]);

  const formattedNumber = animatedNumber.toLocaleString('en-US');

  return <h4>{formattedNumber}{sign}</h4>;
};

