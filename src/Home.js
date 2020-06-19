import React from 'react';
import { useForm, usePlugin } from 'tinacms';
import { imagesBlock } from './components/Images';
import { paragraphBlock } from './components/Paragraph';
import { featureListBlock } from './components/FeatureList';

import { InlineForm, InlineBlocks } from 'react-tinacms-inline';
import { heroBlock } from './components/Hero';
import data from './data/data.json';

export default function Home() {
  const formConfig = {
    id: './data/data.json',
    initialValues: {
      blocks: data.blocks,
    },
    onSubmit() {},
  };

  const [, form] = useForm(formConfig);

  usePlugin(form);

  return (
    <div className="home">
      <InlineForm form={form} initialStatus="active">
        <InlineBlocks name="blocks" blocks={HOME_BLOCKS} />
      </InlineForm>
    </div>
  );
}

const HOME_BLOCKS = {
  hero: heroBlock,
  images: imagesBlock,
  paragraph: paragraphBlock,
  features: featureListBlock,
};
