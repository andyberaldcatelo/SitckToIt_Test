import React, { Component } from 'react';
import Score from '../../containers/Score/Score';
import singlesXML from '../../assets/xml/singles.musicxml';
import doublesXML from '../../assets/xml/doubles.musicxml';
import paradiddlesXML from '../../assets/xml/paradiddles.musicxml';
import SelectOption from '../UI/SelectOption/SelectOption';

class ScoreManager extends Component {
  state = {
    file: singlesXML,
    scores: {
      singles: singlesXML,
      doubles: doublesXML,
      paradiddles: paradiddlesXML,
    },
  };

  // Switches the score based on select value.
  switchScoreHandler = (event) => {
    this.setState({
      file: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <select value={this.state.file} onChange={this.switchScoreHandler}>
          <SelectOption options={this.state.scores} />
        </select>
        <Score selectedScore={this.state.file} />
      </div>
    );
  }
}

export default ScoreManager;
