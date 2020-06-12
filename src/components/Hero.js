import React from 'react';
import { InlineTextarea, InlineText } from 'react-tinacms-inline';
import '../styles/Hero.css';

export default function Hero() {
  return (
    <div className="hero">
      <h1>
        <InlineText name="hero.headline" />
      </h1>
      <p>
        <InlineTextarea name="hero.subtext" focusRing />
      </p>
    </div>
  );
}
