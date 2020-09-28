import React from 'react';
import { TinaProvider, TinaCMS } from 'tinacms';
import Home from './Home';
import DummyMediaStore from './mediaStore';

function App() {
  const cms = new TinaCMS({
    enabled: true,
    toolbar: true,
    media: new DummyMediaStore(),
  });

  return (
    <TinaProvider cms={cms}>
      <Home />
    </TinaProvider>
  );
}

export default App;
