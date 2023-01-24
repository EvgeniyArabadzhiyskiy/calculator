import React from "react";

import * as Styled from './styled'
import DisplayCC from "./Display";
import HistoryCC from "./History";
import KeypadCC from "./Keypad";

class CalculatorCC extends React.Component {
  render() {
    return (
      <Styled.FlexContainer>
        <Styled.CalculatorWrapper>
          <DisplayCC />
          <KeypadCC />
        </Styled.CalculatorWrapper>
        <HistoryCC />
      </Styled.FlexContainer>
    );
  }
}

export default CalculatorCC;
