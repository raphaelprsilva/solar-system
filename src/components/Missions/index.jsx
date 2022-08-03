import React, { Component } from 'react';
import Title from '../Title/Title';
import missions from '../../data/missions';
import MissionCard from '../MissionCard';

import * as S from './styled';

export default class Missions extends Component {
  render() {
    return (
      <S.MissionsWrapper data-testid="missions">
        <Title headline="Missões" />
        <S.MissionsCardWrapper>
          {missions.map((mission) => {
            const { name, year, country, destination } = mission;
            return (
              <MissionCard
                key={name}
                name={name}
                year={year}
                country={country}
                destination={destination}
              />
            );
          })}
        </S.MissionsCardWrapper>
      </S.MissionsWrapper>
    );
  }
}
