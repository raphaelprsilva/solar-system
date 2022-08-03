import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

export default class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <S.PlanetCardWrapper data-testid="planet-card">
        <p data-testid="planet-name">{planetName}</p>
        <img src={planetImage} alt={`Planeta ${planetName}`} />
      </S.PlanetCardWrapper>
    );
  }
}

PlanetCard.propTypes = {
  planetImage: PropTypes.string.isRequired,
  planetName: PropTypes.string.isRequired,
};
