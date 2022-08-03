import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PlanetCard from '../PlanetCard';
import * as S from './styled';
import Title from '../Title/Title';

export default class Planets extends Component {
  render() {
    const { planets } = this.props;
    return (
      <S.PlanetsWrapper>
        <Title headline="Planetas" />
        <S.PlanetsCardWrapper>
          {planets.map((planet) => (
            <PlanetCard
              key={planet.name}
              planetName={planet.name}
              planetImage={planet.image}
            />
          ))}
        </S.PlanetsCardWrapper>
      </S.PlanetsWrapper>
    );
  }
}

Planets.propTypes = {
  planets: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
    }),
  ).isRequired,
};
