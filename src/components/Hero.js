import React from 'react';
import { InlineTextarea, BlocksControls } from 'react-tinacms-inline';
import '../styles/hero.css';

export function Hero({ index }) {
  return (
    <BlocksControls
      index={index}
      focusRing={{ offset: { x: -10, y: -18 }, borderRadius: 8 }}
      insetControls={true}
    >
      <div className="hero">
        <div className="wrapper wrapper--narrow">
          <h1>
            <InlineTextarea name="headline" focusRing={false} />
          </h1>
          <p>
            <InlineTextarea name="subtext" focusRing={false} />
          </p>
        </div>
      </div>
    </BlocksControls>
  );
}

export const hero_template = {
  label: 'Hero',
  defaultItem: {
    headline: 'Suspended in a Sunbeam',
    subtext:
      'Dispassionate extraterrestrial observer are creatures of the cosmos courage of our questions.',
  },
  fields: [],
};
