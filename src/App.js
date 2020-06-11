import React from 'react';
import { TinaProvider, TinaCMS } from 'tinacms';
import Hero from './components/Hero';
import data from './data/data.json';

function App() {
  const cms = new TinaCMS({
    enabled: true,
    sidebar: {
      hidden: true,
    },
    toolbar: { hidden: false },
  });

  return (
    <TinaProvider cms={cms}>
      <Hero data={data.hero} />
    </TinaProvider>
  );
}

export default App;
