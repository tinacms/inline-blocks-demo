import React from 'react';
import { useForm } from 'tinacms';
import { InlineForm, InlineBlocks } from 'react-tinacms-inline';
import { Hero, hero_template } from './components/Hero';
import data from './data/data.json';

export default function Home() {
  const formConfig = {
    id: './data/data.json',
    initialValues: {
      blocks: data.blocks,
    },
    onSubmit() {},
  };
  console.log({ data });

  const [pageData, form] = useForm(formConfig);

  return (
    <div className="home">
      <InlineForm form={form} initialStatus="active">
        <InlineBlocks name="blocks" blocks={HOME_BLOCKS} />
      </InlineForm>
    </div>
  );
}

const HOME_BLOCKS = {
  hero: {
    Component: Hero,
    template: hero_template,
  },
};
