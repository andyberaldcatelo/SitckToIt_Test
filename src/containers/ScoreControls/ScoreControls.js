import React from 'react';
import Metronome from './ScoreControl/Metronome/Metronome';

const scoreControls = (props) => (
  <div>
    <Metronome />
  </div>
);

export default scoreControls;

/* bpm={this.state.bpm}
          onChangeBPM={this.changeBPMHandler}
          btnAccessibility={this.updateButtonAccessibility}
          decrementBPM={this.decrementBPMHandler}
          incrementBPM={this.incrementBPMHandler}
          incrementable={this.state.incrementable}
          decrementable={this.state.decrementable} */
