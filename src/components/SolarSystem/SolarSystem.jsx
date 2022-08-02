import React, { Component } from 'react';

import Title from '../Title/Title';
import planets from '../../data/planets';
import Planets from '../Planets/Planets';
import * as S from './styled';

export default class SolarSystem extends Component {
  render() {
    return (
      <S.SolarSystemWrapper data-testid="solar-system">
        <Title headline="Planetas" />
        <Planets planets={planets} />
      </S.SolarSystemWrapper>
    );
  }
}
