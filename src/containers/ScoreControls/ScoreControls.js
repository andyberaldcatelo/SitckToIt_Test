import React from 'react';
import Metronome from './ScoreControl/Metronome/Metronome';

const scoreControls = (props) => (
  <div>
    <Metronome bpm={props.bpm} change={props.onChangeBPM} />
  </div>
);

export default scoreControls;
