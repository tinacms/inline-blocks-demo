import React from 'react';
// 1. Import `useForm`
import { useForm } from 'tinacms';
import { Hero } from './components/Hero';
import data from './data/data.json';

export default function Home() {
  // 2. Create a config object
  const formConfig = {
    id: './data/data.json',
    initialValues: {
      hero: data.hero,
    },
    onSubmit() {},
  };

  // 3. Call `useForm` with the config object.
  const [pageData, form] = useForm(formConfig);

  // 4. Use the return data now connected with a TinaCMS form
  return (
    <div className="home">
      <Hero data={pageData.hero} />;
    </div>
  );
}
