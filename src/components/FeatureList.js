import React from 'react';
import { BlocksControls, InlineBlocks } from 'react-tinacms-inline';
import '../styles/features.css';
import { featureBlock } from './Feature';

function featureList({ index }) {
  return (
    <BlocksControls
      index={index}
      focusRing={{ offset: 0 }}
      insetControls={true}
    >
      <div className="wrapper">
        <InlineBlocks
          name="features"
          blocks={FEATURE_BLOCKS}
          direction="row"
          className="feature-list"
        />
      </div>
    </BlocksControls>
  );
}

const FEATURE_BLOCKS = {
  feature: featureBlock,
};

export const featureListBlock = {
  Component: featureList,
  template: {
    label: 'Feature List',
    defaultItem: {
      _template: 'features',
      features: [
        {
          _template: 'feature',
          heading: 'heading 1',
          supporting_copy: 'supporting copy',
        },
        {
          _template: 'feature',
          heading: 'heading 2',
          supporting_copy: 'supporting copy',
        },
        {
          _template: 'feature',
          heading: 'heading 3',
          supporting_copy: 'supporting copy',
        },
      ],
    },
    fields: [],
  },
};
