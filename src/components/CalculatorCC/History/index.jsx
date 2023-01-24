import React from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import * as Styled from './styled'

class HistoryCC extends React.Component {
    render() {
        const { history } = this.props;
      return (
        <Styled.HistoryWrapper>
          <Styled.Title>History</Styled.Title>
          <Styled.HistoryList data-cy="history">
            {history.map((item, index) => (
              <Styled.HistotyItem key={`${index}-key`}>
                {item}
              </Styled.HistotyItem>
            ))}
          </Styled.HistoryList>
        </Styled.HistoryWrapper>
      )
    }
}

const mapStateToProps = (state) => ({
  history: state.calculator.history,
});

HistoryCC.propTypes = {
  history: PropTypes.array
}

export default connect(mapStateToProps)(HistoryCC)
