import React from 'react';
import { InlineTextarea, BlocksControls } from 'react-tinacms-inline';
import '../styles/hero.css';

export function Hero({ index }) {
  return (
    <BlocksControls index={index}>
      <div className="hero">
        <div className="wrapper wrapper--narrow">
          <h1>
            <InlineTextarea name="headline" />
          </h1>
          <p>
            <InlineTextarea name="subtext" />
          </p>
        </div>
      </div>
    </BlocksControls>
  );
}
