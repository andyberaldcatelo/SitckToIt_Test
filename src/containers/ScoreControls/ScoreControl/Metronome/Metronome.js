import React, { Component } from 'react';
import Button from '../../../../components/UI/Button/Button';
import Slider from '../../../../components/UI/Slider/Slider';

class Metronome extends Component {
  state = {
    bpm: 80,
    disableIncrem: false,
    disableDecrem: false,
  };

  /**
   * Increments the bpm state value based on the event
   *  @param {event} event An event triggered somewhere in the related JSX
   */
  incrementBPMHandler = () => {
    let prevBPM = this.state.bpm;
    const updatedBPM = prevBPM + 1;
    this.setState({ bpm: updatedBPM });
    this.updateButtonAccessibility(updatedBPM);
  };

  /**
   * Decrements the bpm state value based on the event
   *  @param {event} event An event triggered somewhere in the related JSX
   */
  decrementBPMHandler = () => {
    let prevBPM = this.state.bpm;
    const updatedBPM = prevBPM - 1;
    this.setState({ bpm: updatedBPM });
    this.updateButtonAccessibility(updatedBPM);
  };

  /**
   * Updates the bpm state value based on the event value
   *  @param {event} event An event triggered somewhere in the related JSX
   */
  changeBPMHandler = (event) => {
    if (
      parseInt(event.target.value) &&
      parseInt(event.target.value) <= 500 &&
      parseInt(event.target.value) > 19
    ) {
      this.setState({ bpm: parseInt(event.target.value) });
      this.updateButtonAccessibility(event.target.value);
    }
    if (event.target.value === '') {
      this.setState({ bpm: 20 });
      this.updateButtonAccessibility(event.target.value);
    }
  };

  /**
   * Enables or Disables incremental and decremental button based on bpm value
   *  @param {number} bpm Beats Per Minute
   */
  updateButtonAccessibility(bpm) {
    this.setState({
      disableIncrem: bpm >= 500,
      disableDecrem: bpm < 21,
    });
  }

  render() {
    return (
      <div>
        <label>
          Tempo : <strong>{this.state.bpm} </strong>
        </label>
        <Button
          clicked={this.incrementBPMHandler}
          disabled={this.state.disableIncrem}
        >
          +
        </Button>
        <Button
          clicked={this.decrementBPMHandler}
          disabled={this.state.disableDecrem}
        >
          -
        </Button>
        <Slider
          minValueSlider='20'
          maxValueSlider='500'
          bpm={this.state.bpm}
          change={this.changeBPMHandler}
        />
      </div>
    );
  }
}

export default Metronome;
