import React from 'react';

import Slider from './components/Slider.js';

export default function App() {

  return(
    <div className="website">

      <h1 className="website__heading"><span className="website__heading-symbol">/</span> Reviews</h1>

      <Slider/>

    </div>
  );
}