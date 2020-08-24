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
    if (this.state.playing) {
      this.stopMetronomeHandler();
      this.startMetronomeHandler(updatedBPM);
    }
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

    if (this.state.playing) {
      this.stopMetronomeHandler();
      this.startMetronomeHandler(updatedBPM);
    }
  };

  /**
   * Updates the bpm state value based on the event value
   *  @param {event} event An event triggered somewhere in the related JSX
   */
  changeBPMHandler = (event) => {
    this.setState({ bpm: parseInt(event.target.value) });
    this.updateButtonAccessibility(parseInt(event.target.value));

    // If the metronome is launched, we have to stop it to re-launched it with the new state value
    if (this.state.playing) {
      this.stopMetronomeHandler();
      this.startMetronomeHandler(parseInt(event.target.value));
    }
  };

  /**
   * Enables or Disables incremental and decremental button based on bpm value
   *  @param {number} bpm Beats Per Minute
   */
  updateButtonAccessibility(bpm) {
    this.setState({
      disableIncrem: bpm >= 250,
      disableDecrem: bpm < 21,
    });
  }

  /**
   * Starts or stops the metronome based when the button is clicked.
   */
  startStopHandler = () => {
    let inverted = !this.state.playing;
    this.setState({ playing: inverted });
    this.state.playing
      ? this.stopMetronomeHandler()
      : this.startMetronomeHandler(this.state.bpm);
  };

  /**
   * Starts the actual metronome.
   * @param {number} bpm Beats Per Minute
   */
  startMetronomeHandler = (bpm) => {
    this.timer = setInterval(() => this.click2.play(), Math.round(60000 / bpm));
  };

  /**
   * Stops the metronome and reinitializes the Interval
   */
  stopMetronomeHandler = () => {
    clearInterval(this.timer);
    this.timer = null;
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
          maxValueSlider='250'
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
