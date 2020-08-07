import React from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';
import ScoreManager from '../../components/ScoreManager/ScoreManager';

const layout = (props) => (
  <Auxiliary>
    <div>Toolbar, SideDrawer, Backdrop, Mélanie</div>
    <ScoreManager />
    <main>{props.children}</main>
  </Auxiliary>
);

export default layout;
