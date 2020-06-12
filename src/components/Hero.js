import React from 'react';
import {
  InlineTextarea,
  InlineText,
  BlocksControls,
} from 'react-tinacms-inline';
import '../styles/Hero.css';

export function Hero(props) {
  return (
    <BlocksControls index={props.index}>
      <div className="hero">
        <h1>
          <InlineText name="headline" />
        </h1>
        <p>
          <InlineTextarea name="subtext" focusRing />
        </p>
      </div>
    </BlocksControls>
  );
}

export const hero_template = {
  type: 'hero',
  label: 'Hero',
  defaultItem: {
    headline: 'Suspended in a Sunbeam',
    subtext:
      'Dispassionate extraterrestrial observer are creatures of the cosmos courage of our questions.',
  },
  fields: [],
};
