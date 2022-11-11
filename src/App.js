import React from 'react';

import { ReactComponent as Commas } from './resources/commas.svg';
import { ReactComponent as ArrowLeft } from './resources/arrow-left.svg';

export default function App() {

  return(
    <div className="website">

      <h1 className="website__heading"><span className="website__heading-symbol">/</span> Reviews</h1>

      <div className="slider">

        <article className="person">

          <img className="person__image" src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"/>

          <h2 className="person__name">John Doe</h2>

          <span className="person__title">Regular guy</span>

          <p className="person__desc">Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.</p>

          <Commas className="person__commas"/>

        </article>

        <button className="slider__button slider__button--left"><ArrowLeft/></button>
        <button className="slider__button slider__button--right"><ArrowLeft/></button>

      </div>

    </div>
  );
}