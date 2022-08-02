import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

export default class Title extends Component {
  render() {
    const { headline } = this.props;
    return <S.Title>{headline}</S.Title>;
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};
