import React, { Component } from 'react';
import Score from '../../containers/Score/Score';
import singlesXML from '../../assets/xml/singles.musicxml';
import doublesXML from '../../assets/xml/doubles.musicxml';
import paradiddlesXML from '../../assets/xml/paradiddles.musicxml';
import SelectOption from '../UI/SelectOption/SelectOption';
import ScoreControls from '../../containers/ScoreControls/ScoreControls';

class ScoreManager extends Component {
  state = {
    file: singlesXML,
    scores: {
      singles: singlesXML,
      doubles: doublesXML,
      paradiddles: paradiddlesXML,
    },
    bpm: 80,
  };

  // Switches the score based on select value.
  /**
   *  @param {event} event An event triggered somewhere in the related JSX
   */
  switchScoreHandler = (event) => {
    this.setState({
      file: event.target.value,
    });
  };

  changeBPMHandler = (event) => {
    if (
      parseInt(event.target.value) &&
      parseInt(event.target.value) <= 500 &&
      parseInt(event.target.value) > 0
    ) {
      this.setState({ bpm: parseInt(event.target.value) });
    }
    if (event.target.value === '') {
      this.setState({ bpm: 0 });
    }
  };

  render() {
    return (
      <div>
        <select value={this.state.file} onChange={this.switchScoreHandler}>
          <SelectOption options={this.state.scores} />
        </select>
        <Score selectedScore={this.state.file} />
        <ScoreControls
          bpm={this.state.bpm}
          onChangeBPM={this.changeBPMHandler}
        />
      </div>
    );
  }
}

export default ScoreManager;
