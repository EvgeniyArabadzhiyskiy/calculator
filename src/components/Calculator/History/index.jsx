import React from 'react'
import { useSelector } from 'react-redux';

import * as Styled from './styled'

const HistoryFC = () => {
  const history = useSelector((state) => state.calculator.history);

  return (
    <Styled.HistoryWrapper>
      <Styled.Title>
        History
      </Styled.Title>
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

export default HistoryFC