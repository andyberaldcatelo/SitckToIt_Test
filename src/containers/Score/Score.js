import React from 'react';
import OpenSheetMusicDisplay from '../../components/ScoreDisplayer/OpenSheetMusicDisplay';
import classes from './Score.module.css';

const score = (props) => {
  return (
    <div className={classes.Score}>
      <OpenSheetMusicDisplay
        file={props.selectedScore}
        className={classes.OSMD}
      />
    </div>
  );
};
export default score;
