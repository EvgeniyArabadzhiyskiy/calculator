import React from 'react';
import { useSelector } from 'react-redux';

import * as Styled from './styled';

const DisplayFC = () => {
  const display = useSelector(state => state.calculator.display);
  const error = useSelector(state => state.calculator.isError);
  return (
    <Styled.DisplayWrapper>
      {error && <Styled.DisplayError>{error}</Styled.DisplayError>}
      <Styled.Result data-cy="display">{display || '0'}</Styled.Result>
    </Styled.DisplayWrapper>
  );
};

export default DisplayFC;
