import React from 'react';
import OpenSheetMusicDisplay from '../../components/ScoreDisplayer/OpenSheetMusicDisplay';
import singles from '../../assets/xml/singles.musicxml';

const score = (props) => (
  <div>
    <OpenSheetMusicDisplay file={singles} drawTitle='Frisés' />
  </div>
);

export default score;
