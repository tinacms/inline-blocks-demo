// 1. Import new `InlineTextarea` field
import React from 'react';
import { BlocksControls, InlineBlocks } from 'react-tinacms-inline';
import '../styles/features.css';
import { Feature, feature_template } from './Feature';

export function FeaturesList({ index }) {
  return (
    <BlocksControls
      index={index}
      focusRing={{ offset: 0 }}
      insetControls={true}
    >
      <div className="wrapper">
        {/* 2. Pass FEATURE_BLOCKS to blocks, defined further down */}
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

// 3. Fill in default 'Feature' block values
export const features_list_template = {
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
};

// 4. Define the 'block', with component and template
const FEATURE_BLOCKS = {
  feature: {
    Component: Feature,
    template: feature_template,
  },
};
