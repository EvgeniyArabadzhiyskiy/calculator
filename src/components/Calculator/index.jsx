import React from 'react';

import * as Styled from './styled';

import DisplayFC from './Display';
import HistoryFC from './History';
import KeypadFC from './Keypad';




const CalculatorFC = () => {

  return (
    <Styled.FlexContainer>
      <Styled.CalculatorWrapper>
        <DisplayFC />
        <KeypadFC />
      </Styled.CalculatorWrapper>
      <HistoryFC />
    </Styled.FlexContainer>
  );
};

export default CalculatorFC;
