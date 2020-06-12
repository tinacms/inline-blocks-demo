import React from 'react';
import {
  InlineTextarea,
  InlineText,
  BlocksControls,
} from 'react-tinacms-inline';
import '../styles/Hero.css';

export function Hero({ data, index }) {
  return (
    <BlocksControls
      index={index}
      focusRing={{ offset: 0 }}
      insetControls={true}
    >
      <div
        className="hero"
        style={{
          backgroundColor: `${data.background_color}`,
          textAlign: `${data.align}`,
          alignItems: `${data.align === 'left' ? 'start' : data.align}`,
        }}
      >
        <h1>
          <InlineText name="headline" focusRing={false} />
        </h1>
        <p>
          <InlineTextarea name="subtext" focusRing={false} />
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
    background_color: 'aliceblue',
    align: 'center',
  },
  fields: [
    {
      name: 'background_color',
      label: 'Background Color',
      component: 'color',
      widget: 'block',
      colors: ['aliceblue', 'antiquewhite', 'aqua', 'azure', 'darkslategray'],
    },
    {
      name: 'align',
      label: 'Alignment',
      component: 'select',
      options: ['center', 'left'],
    },
  ],
};
