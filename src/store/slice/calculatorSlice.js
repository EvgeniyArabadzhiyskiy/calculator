import { createSlice } from '@reduxjs/toolkit';
import { validateInput } from 'utils/calculateExpression';
import { calculateExpression } from '../../utils/calculateExpression/calculateExpression';

const initialState = {
  display: '',
  history: [],
  isShouldClear: false,
  isError: false,
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setDisplay: (state, action) => {
      const payload = String(action.payload);

      const lastValue = state.display.length - 1;

      if (action.payload === '.' && isNaN(state.display[lastValue])) {
        console.log(isNaN(state.display[lastValue]));
        if (state.display[lastValue] === '.') {
          return
        }
        state.display += '0';
      }

      if (state.display.length < 40 && validateInput(state.display, payload)) {
        if (state.isShouldClear) {
          state.isShouldClear = false;
        }

        state.display += payload;
      }
    },

    clearLastNumber: state => {
      state.display = state.display.slice(0, -1);
    },

    clearDisplay: state => {
      state.display = '';
    },
    calculate: state => {
      const [result, history] = calculateExpression(state.display);

      if (result === 'Infinity') {
        state.isError = true;
        state.display = 'ERROR';
        return;
      }

      state.display = result;
      state.history.push(history);
      state.isShouldClear = true;
    },

    clearError: state => {
      if (state.isError) {
        state.display = '';
        state.isError = false;
      }
    },
  },
});

export const {
  setExpression,
  setExpressionByEquals,
  setDisplay,
  clearLastNumber,
  clearDisplay,
  calculate,
  // clearHistory,
  clearError,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;
