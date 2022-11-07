const mathСalculations = (valueA, valueB, operator) => {
  const a = Number(valueA);
  const b = Number(valueB);

  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    default:
      console.log('ERROR');
  }
};

export default mathСalculations;
