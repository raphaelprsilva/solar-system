import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PlanetCard from './PlanetCard';

export default class Planets extends Component {
  render() {
    const { planets } = this.props;
    return (
      <div>
        {planets.map((planet) => (
          <PlanetCard
            key={ planet.name }
            planetName={ planet.name }
            planetImage={ planet.image }
          />
        ))}
      </div>
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
