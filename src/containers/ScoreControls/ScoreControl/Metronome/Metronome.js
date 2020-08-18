import React, { Component } from 'react';

class Metronome extends Component {
  render() {
    return (
      <div>
        <label>Tempo :</label>
        <input
          type='text'
          value={this.props.bpm}
          onChange={this.props.change}
        />
      </div>
    );
  }
}

export default Metronome;
