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

  render() {
    return (
      <div>
        <select>
          <SelectOption options={this.state.scores} />
        </select>

        <Score selectedScore={singlesXML} />
      </div>
    );
  }
}

export default ScoreManager;
