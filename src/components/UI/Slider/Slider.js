import React from 'react';

const slider = (props) => (
  <div>
    <input
      type='range'
      min={props.minValueSlider}
      max={props.maxValueSlider}
      value={props.bpm}
      onChange={props.change}
    />
  </div>
);

export default slider;
