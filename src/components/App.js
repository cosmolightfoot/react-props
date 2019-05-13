import React from 'react';
import Dog from './Dog.js';
import Header from './Header.js';

export default function App() {
  return (
    <>
      <Header />
      <Dog name="spot" age={5} weight="80kg" />
    </>
  );
}


