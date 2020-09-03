import React, { Component } from 'react';
import Button from '../../../../components/UI/Button/Button';
import Slider from '../../../../components/UI/Slider/Slider';
import click1 from '../../../../assets/sounds/click1.wav';
import click2 from '../../../../assets/sounds/click2.wav';
import classes from './Metronome.module.css';

class Metronome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bpm: 80,
      disableIncrem: false,
      disableDecrem: false,
      playing: false,
      counter: 1,
      screenCounter: null,
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
    this.setState({ bpm: updatedBPM, counter: 1 });
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
    this.stopMetronomeHandler();

    let prevBPM = this.state.bpm;
    const updatedBPM = prevBPM - 1;
    this.setState({ bpm: updatedBPM, counter: 1 });
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
    this.timer = setInterval(
      () => this.soundSwitchHandler(),
      Math.round(60000 / bpm)
    );
  };

  /**
   * Stops the metronome and reinitializes the Interval
   */
  stopMetronomeHandler = () => {
    clearInterval(this.timer);
    this.timer = null;
    this.setState({ counter: 1 });
  };

  soundSwitchHandler = () => {
    let newValue = this.state.counter;
    this.setState({ screenCounter: newValue });
    if (this.state.counter === 4) {
      this.setState({ counter: 1 });
      this.click1.play();
    } else {
      if (this.state.counter === 1) {
        newValue++;
        this.setState({ counter: newValue });
        this.click2.play();
      } else {
        newValue++;
        this.setState({ counter: newValue });
        this.click1.play();
      }
    }
  };

  render() {
    return (
      <div className={classes.Metronome}>
        <label className={classes.Label}>
          Tempo : <strong className={classes.Tempo}>{this.state.bpm} </strong>
        </label>
        <Button
          clicked={this.incrementBPMHandler}
          disabled={this.state.disableIncrem}
          btnType='AdjustTempo'
        >
          +
        </Button>
        <Button
          clicked={this.decrementBPMHandler}
          disabled={this.state.disableDecrem}
          btnType='AdjustTempo'
        >
          -
        </Button>
        <Slider
          minValueSlider='20'
          maxValueSlider='250'
          bpm={this.state.bpm}
          change={this.changeBPMHandler}
        />
        <Button
          btnType={this.state.playing ? 'Stop' : 'Start'}
          clicked={this.startStopHandler}
        >
          {this.state.playing ? 'Stop' : 'Play'}
        </Button>
        <strong>{this.state.screenCounter}</strong>
      </div>
    );
  }
}

export default Metronome;
