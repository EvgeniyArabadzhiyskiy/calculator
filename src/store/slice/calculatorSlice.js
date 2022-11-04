import { createSlice } from '@reduxjs/toolkit';
import { validateInput } from 'utils/calculateExpression';
import { calculateExpression } from '../../utils/calculateExpression/calculateExpression';

const initialState = {
  // expression: [],
  // data: '',
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

      if (action.payload[0] === '.') {
        state.display += '0' 
      }

      if (state.display.length < 40 && validateInput(state.display, payload)) {
        if (state.isShouldClear) {
          // state.display = "";
          state.isShouldClear = false;
        }

        state.display += payload;
        // state.data += payload;
      }
    },

    // setExpression: (state, { payload }) => {
    //   state.expression.push(state.data);
    //   state.data = '';

    //   state.expression.push(payload);
    //   state.display += payload;
    // },

    // setExpressionByEquals: state => {
    //   state.expression.push(state.data);
    //   state.data = '';
    // },

    clearLastNumber: state => {
      state.display = state.display.slice(0, -1);
      // state.data = state.data.slice(0, -1);
    },

    clearDisplay: state => {
      state.display = '';

      // state.data = '';
      // state.expression = [];
    },
    calculate: state => {
      const [result, history] = calculateExpression(state.display);
      // console.log("history", history);
      // console.log("result", result);

      if (result === 'Infinity') {
        state.isError = true;
        state.display = 'ERROR';
        return;
      }

      // state.data = result;
      // state.expression = [];

      state.display = result;
      state.history.push(history);
      state.isShouldClear = true;
    },

    clearError: state => {
      if (state.isError) {
        state.display = '';
        // state.data = '';
        // state.expression = [];
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
