import React from 'react';
import OpenSheetMusicDisplay from '../../components/ScoreDisplayer/OpenSheetMusicDisplay';

const score = (props) => {
  return (
    <div>
      <OpenSheetMusicDisplay file={props.selectedScore} drawTitle='Frisés' />
    </div>
  );
};
export default score;
