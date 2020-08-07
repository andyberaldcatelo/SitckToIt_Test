import React, { Component } from 'react';
import Score from '../../containers/Score/Score';
import singlesXML from '../../assets/xml/singles.musicxml';
import doublesXML from '../../assets/xml/doubles.musicxml';

class ScoreManager extends Component {
  state = {
    file: 'singles.musicxml',
    scores: {
      singles: singlesXML,
      doubles: doublesXML,
    },
  };

  render() {
    return (
      <div>
        <Score file={this.state.selectedScore} />
      </div>
    );
  }
}

export default ScoreManager;
