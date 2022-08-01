import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

export default class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missions.map((mission) => {
          const { name, year, country, destination } = mission;
          return (
            <MissionCard
              key={ name }
              name={ name }
              year={ year }
              country={ country }
              destination={ destination }
            />
          );
        })}
      </div>
    );
  }
}
