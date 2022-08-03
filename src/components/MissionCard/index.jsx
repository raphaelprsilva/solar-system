import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

export default class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <S.CardWrapper data-testid="mission-card">
        <S.FirstParagraph data-testid="mission-name">{name}</S.FirstParagraph>
        <S.Paragraph data-testid="mission-year">{year}</S.Paragraph>
        <S.Paragraph data-testid="mission-country">{country}</S.Paragraph>
        <S.Paragraph data-testid="mission-destination">
          {destination}
        </S.Paragraph>
      </S.CardWrapper>
    );
  }
}

MissionCard.propTypes = {
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};
