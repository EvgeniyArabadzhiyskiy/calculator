import makeMathOperations from './makeMathOperations';

const signPriority = {
  '*': '*',
  '/': '/',
};

const getCalculate = array => {
  if (array.length === 1) return;

  const isMultiply = array.indexOf('*') !== -1;
  const isDivision = array.indexOf('/') !== -1;

  for (let i = 0; i < array.length; i += 1) {
    const element = array[i];
    const mathSymbol = signPriority[element];

    if (mathSymbol) {
      makeMathOperations(array, mathSymbol);
    }
  }

  if (!isMultiply && !isDivision) {
    makeMathOperations(array);
  }

  getCalculate(array);
};

export default getCalculate;
