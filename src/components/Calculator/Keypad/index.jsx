import React from 'react';
import { useDispatch } from 'react-redux';

import * as Styled from './styled';

import {
  setDisplay,
  clearLastNumber,
  clearDisplay,
  calculate,
  clearError,
} from '../../../store/slice/calculatorSlice';

const btn = [
  'C', 7, 8, 9, '*', 
  '-', 4, 5, 6, '/',
  '+', 1, 2, 3, '=',
  '.', '(', 0,  ')', '←',
]

const KeypadFC = () => {
  const dispatch = useDispatch();

  const handleClick = value => () => {
    dispatch(clearError());

    switch (value) {
      case '=':
        dispatch(calculate());
        break;
      case 'C':
        dispatch(clearDisplay());
        break;
      case '←':
        dispatch(clearLastNumber());
        break;
      default:
        dispatch(setDisplay(value));
    }
  };

  return (
    <Styled.KeypadWrapper>
      {btn.map(valueBtn => (
        <Styled.Button
          data-cy={valueBtn}
          key={`${valueBtn}-key`}
          onClick={handleClick(valueBtn)}
        >
          {valueBtn}
        </Styled.Button>
      ))}
    </Styled.KeypadWrapper>
  );
};

export default KeypadFC;
