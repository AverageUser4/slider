import React from 'react';

import { ReactComponent as ArrowLeft } from '../resources/arrow-left.svg';
import peopleData from '../resources/people.js';

import Person from './Person.js';

export default function Slider() {
  const max = peopleData.length - 1;

  const [sliderData, setSliderData] = React.useState({
    indexOfCurrent: 0,
    prev: peopleData[max].id,
    current: peopleData[0].id,
    next: peopleData[1].id,
  });

  const personElements = peopleData.map(person =>
    <Person
      key={person.id}
      sliderData={sliderData}
      changeSlide={changeSlide}
      {...person}
    />
  );

  function changeSlide(goBack = false) {
    setSliderData((prev) => {
      let indexOfCurrent = 
        prev.indexOfCurrent + 1 > max ? 0 : prev.indexOfCurrent + 1;

      if(goBack)
        indexOfCurrent =
          prev.indexOfCurrent - 1 < 0 ? max : prev.indexOfCurrent - 1;

      const indexOfPrev = indexOfCurrent - 1 < 0 ? max : indexOfCurrent - 1;
      const indexOfNext = indexOfCurrent + 1 > max ? 0 : indexOfCurrent + 1;

      return {
        indexOfCurrent,
        prev: peopleData[indexOfPrev].id,
        current: peopleData[indexOfCurrent].id,
        next: peopleData[indexOfNext].id
      };
    });
  }

  // React.useEffect(() => {
  //   const intervalID = setInterval(changeSlide, 5000);

  //   return () => clearInterval(intervalID);
  // }, [sliderData]);

  return (
    <div className="slider">

      {personElements}

      <button 
        className="slider__button slider__button--left"
        onClick={() => changeSlide(true)}
      ><ArrowLeft/></button>

      <button 
        className="slider__button slider__button--right"
        onClick={() => changeSlide(false)}
      >
      <ArrowLeft/></button>

    </div>
  );
}