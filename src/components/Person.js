import React from 'react';

import { ReactComponent as Commas } from '../resources/commas.svg';

export default function Person(props) {
  let personClass = 'person slider__element';
  if(props.sliderData.prev === props.id)
    personClass += ' slider__element--prev';
  else if(props.sliderData.current === props.id)
    personClass += ' slider__element--current';
  else if(props.sliderData.next === props.id)
    personClass += ' slider__element--next';

  return (
    <article className={personClass}>

      <img className="person__image" src={props.image}/>

      <h2 className="person__name">{props.name}</h2>

      <span className="person__title">{props.title}</span>

      <p className="person__desc">{props.quote}</p>

      <Commas className="person__commas"/>

    </article>
  );
}