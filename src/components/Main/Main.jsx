import React, { Component } from 'react';

import * as S from './styled';

import Missions from '../Missions';
import SolarSystem from '../SolarSystem/SolarSystem';

export default class Main extends Component {
  render() {
    return (
      <S.MainWrapper>
        <SolarSystem />
        <Missions />
      </S.MainWrapper>
    );
  }
}
