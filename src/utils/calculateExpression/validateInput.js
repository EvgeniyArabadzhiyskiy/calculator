const validateInput = (display, s) => {
  const allString = display + s;

  if (display === '') {
    const fff = ['*', '/', '+', '-', ')'].indexOf(s) === -1;
    // console.log('validateInput ~ fff', fff);
    return fff;
  }
  const ddd = !allString.match(/(\+|-|\*|\/){2,}|\.{2,}/);
  // console.log('hello', ddd);

  return ddd;
};

export default validateInput;
