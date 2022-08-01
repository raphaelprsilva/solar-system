import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import Planets from './Planets';

export default class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <Planets planets={ planets } />
      </div>
    );
  }
}
