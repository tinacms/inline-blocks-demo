import React from 'react';
import { TinaProvider, TinaCMS } from 'tinacms';
import Hero from './components/Hero';

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
      <Hero />
    </TinaProvider>
  );
}

export default App;
