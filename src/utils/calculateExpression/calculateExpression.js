import { getCalculate, makeArrayData } from 'utils/calculateExpression';

export const calculateExpression = str => {
  const data = str.split('');
  const arr = makeArrayData(data);
  console.log('calculateExpression ~ arr', arr);

  const dataExpression = [...arr];
  getCalculate(dataExpression);

  const result = dataExpression.join(' ');
  const allString = arr.join(' ');
  const history = `${allString} = ${result}`;
  console.log('HISTORY', history);

  return [result, history];
};
