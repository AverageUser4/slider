import React, { useEffect } from 'react';

import { ReactComponent as Commas } from '../resources/commas.svg';

export default function Person(props) {
  const [pointerData, setPointerData] = React.useState({
    isPressed: false,
    initialX: 0
  });

  let personClass = 'person slider__element';
  if(props.sliderData.prev === props.id)
    personClass += ' slider__element--prev';
  else if(props.sliderData.current === props.id)
    personClass += ' slider__element--current';
  else if(props.sliderData.next === props.id)
    personClass += ' slider__element--next';

  function onPointerDown(event) {
    setPointerData({
      isPressed: true,
      initialX: event.clientX
    });
  }

  function onPointerUp() {
    setPointerData({
      isPressed: false,
      initialX: 0
    });
  }

  function onPointerMove(event) {
    if(!pointerData.isPressed || Math.abs(event.clientX - pointerData.initialX) < 75)
      return;

    if(event.clientX > pointerData.initialX)
      props.changeSlide(true);
    else if(event.clientX < pointerData.initialX)
      props.changeSlide(false);
    else
      return;
    
    onPointerUp();
  }

  useEffect(() => {
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointermove', onPointerMove);

    return () => {
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointermove', onPointerMove);
    };
  }, [pointerData]);

  return (
    <article 
      className={personClass}
      onPointerDown={onPointerDown}  
    >

      <img className="person__image" src={props.image}/>

      <h2 className="person__name">{props.name + props.id}</h2>

      <span className="person__title">{props.title}</span>

      <p className="person__desc">{props.quote}</p>

      <Commas className="person__commas"/>

    </article>
  );
}