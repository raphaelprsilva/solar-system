import React, { Component } from 'react';

import Missions from '../Missions';
import SolarSystem from '../SolarSystem';

export default class Main extends Component {
  render() {
    return (
      <main>
        <SolarSystem />
        <Missions />
      </main>
    );
  }
}
