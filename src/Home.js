import React from 'react';
import { useForm } from 'tinacms';
import { InlineForm } from 'react-tinacms-inline';
import Hero from './components/Hero';
import data from './data/data.json';

export default function Home() {
  const formConfig = {
    id: './data/data.json',
    initialValues: {
      hero: data.hero,
    },
    onSubmit() {},
  };

  const [pageData, form] = useForm(formConfig);

  return (
    <InlineForm form={form}>
      <Hero data={pageData.hero} />
    </InlineForm>
  );
}
