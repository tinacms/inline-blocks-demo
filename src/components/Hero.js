import React from 'react';
import '../styles/Hero.css';

export default function Hero({ data }) {
  return (
    <div className="hero">
      <h1>{data.headline}</h1>
      <p>{data.subtext}</p>
    </div>
  );
}
