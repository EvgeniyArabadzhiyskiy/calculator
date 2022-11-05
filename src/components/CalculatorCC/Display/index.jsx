import React from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import * as Styled from './styled'


class DisplayCC extends React.Component {
  render() {
    const { isError, display } = this.props;
    return (
      <Styled.DisplayWrapper>
        <Styled.Error data-cy="error" isError={isError}>Error! Please, check input</Styled.Error>
        <Styled.Result data-cy="display">
          {display || '0'}
        </Styled.Result>
      </Styled.DisplayWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  display: state.calculator.display,
  isError: state.calculator.isError,
});

DisplayCC.propTypes = {
  display: PropTypes.string,
  isError: PropTypes.bool
}

export default connect(mapStateToProps)(DisplayCC)
