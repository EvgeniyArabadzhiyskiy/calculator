import mathСalculations from './mathСalculations';

const makeMathOperations = (array, symbol) => {
  let startIdx = 0;

  if (symbol) {
    const idx = array.indexOf(symbol);
    startIdx = idx - 1;
  }

  const [a, operator, b] = array.splice(startIdx, 3);
  const result = mathСalculations(a, b, operator);
  array.splice(startIdx, 0, result);
};
export default makeMathOperations;
