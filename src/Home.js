import React from 'react';
import { Hero } from './components/Hero';
import data from './data/data.json';

export default function Home() {
  return (
    <div className="home">
      <Hero data={data} />
    </div>
  );
}
