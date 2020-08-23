import React, { Component } from 'react';
import Button from '../../../../components/UI/Button/Button';
import Slider from '../../../../components/UI/Slider/Slider';
import click1 from '../../../../assets/sounds/click1.wav';
import click2 from '../../../../assets/sounds/click2.wav';

class Metronome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bpm: 80,
      disableIncrem: false,
      disableDecrem: false,
      playing: false,
    };
    this.click1 = new Audio(click1);
    this.click2 = new Audio(click2);
    this.timer = null;
  }

  /**
   * Increments the bpm state value based on the event
   *  @param {event} event An event triggered somewhere in the related JSX
   */
  incrementBPMHandler = () => {
    let prevBPM = this.state.bpm;
    const updatedBPM = prevBPM + 1;
    this.setState({ bpm: updatedBPM });
    this.updateButtonAccessibility(updatedBPM);
    this.stopMetronomeHandler();
    this.startMetronomeHandler();
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
    this.stopMetronomeHandler();
    this.startMetronomeHandler();
  };

  /**
   * Updates the bpm state value based on the event value
   *  @param {event} event An event triggered somewhere in the related JSX
   */
  changeBPMHandler = (event) => {
    this.setState({ bpm: parseInt(event.target.value) });
    this.updateButtonAccessibility(event.target.value);

    // If the metronome is launched, we have to stop it to re-launched it with the new state value
    if (this.state.playing) {
      this.stopMetronomeHandler();
      this.startMetronomeHandler();
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

  startStopHandler = () => {
    let inverted = !this.state.playing;
    this.setState({ playing: inverted });
    this.state.playing
      ? this.stopMetronomeHandler()
      : this.startMetronomeHandler();
  };

  startMetronomeHandler = () => {
    // this.click2.play();
    this.timer = setInterval(() => this.click2.play(), 60000 / this.state.bpm);
  };

  stopMetronomeHandler = () => {
    clearInterval(this.timer);
  };

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
        <Button clicked={this.startStopHandler}>
          {this.state.playing ? 'Stop' : 'Play'}
        </Button>
      </div>
    );
  }
}

export default Metronome;
