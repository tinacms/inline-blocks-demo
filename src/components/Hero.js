import React from 'react';
import '../styles/hero.css';

export function Hero({ data }) {
  return (
    <div className="hero">
      <div className="wrapper wrapper--narrow">
        <h1>{data.headline}</h1>
        <p>{data.subtext}</p>
      </div>
    </div>
  );
}
