import React from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';
import ScoreDisplayer from '../../components/ScoreDisplayer/ScoreDisplayer';

const layout = (props) => (
  <Auxiliary>
    <div>Toolbar, SideDrawer, Backdrop, Mélanie</div>
    <div id='boo'></div>
    <ScoreDisplayer></ScoreDisplayer>
    <main>{props.children}</main>
  </Auxiliary>
);

export default layout;
