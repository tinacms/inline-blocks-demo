import React from 'react';
import '../styles/hero.css';

export function Hero({ headline, subtext }) {
  return (
    <div className='hero'>
      <div className='wrapper wrapper--narrow'>
        <h1>{headline}</h1>
        <p>{subtext}</p>
      </div>
    </div>
  );
}
