import React from 'react';
// 1. Import `InlineTextarea`
import { InlineTextarea } from 'react-tinacms-inline';
import '../styles/hero.css';

export function Hero() {
  // 2. Replace `data` with Inline Fields
  return (
    <div className="hero">
      <div className="wrapper wrapper--narrow">
        <h1>
          <InlineTextarea name="hero.headline" />
        </h1>
        <p>
          <InlineTextarea name="hero.subtext" />
        </p>
      </div>
    </div>
  );
}
