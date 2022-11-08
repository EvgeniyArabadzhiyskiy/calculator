const priority = {
  '/': '/',
  '*': '*',
  '+': '+',
  '-': '-',
};

export default function makeArrayData(array) {
  let idxMathSymbol;
  let start = 0;
  let resultArray = [];
  const lastIndex = array.length - 1

  for (let i = 0; i <= lastIndex ; i += 1) {
    const element = array[i];
    const mathSymbol = priority[element];

    if (mathSymbol) {
      idxMathSymbol = array.indexOf(mathSymbol);

      let end = idxMathSymbol;
      const number = array.slice(start, end).join('');
      resultArray.push(number, array[end]);

      array[idxMathSymbol] = null;
      start = idxMathSymbol + 1;
    }

    if (i === lastIndex) {
      const number = array.slice(idxMathSymbol + 1).join('');
      resultArray.push(number);
    }
  }
  return resultArray;
}






// function loop(array) {

//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     const mathSymbol = priority[element];

//     if (mathSymbol) {

//       idxSymbol = testArr.indexOf(mathSymbol);
//       let end = idxSymbol
//       const slic = array.slice(start, end).join('');
//       superArray.push(slic, array[end] )
//       array[idxSymbol] = false
//       start = idxSymbol + 1
//     }

//     if (i === array.length - 1){
//       const slic = array.slice(idxSymbol + 1).join('');
//       superArray.push(slic)
//     }

//   }

//   // for (let i = 0; i < array.length; i += 1) {
//   //   const element = array[i];
//   //   const mathSymbol = priority[element];

//   //   // if ('+') {

//   //     const idxSymbol1 = array.indexOf('+');
//   //     console.log('loop ~ idxSymbol1', idxSymbol1);

//   //     if (idxSymbol1 !== -1) {
//   //       const slic = array.splice(0, idxSymbol1).join('');
//   //       console.log("loop ~ slic", slic);
//   //       const oper = array.shift();
//   //       superArray.push(slic, oper);
//   //     } else {
//   //       console.log('hello');
//   //       const slic2 = array.join('');
//   //       superArray.push(slic2);
//   //       array = [];
//   //     }

      

//   //     console.log('array', array);
      
//   //   // }

    
//   // }
//   console.log("loop ~ array", array);
//   console.log('superArray', superArray);
//   // loop(array);
// }
// loop(testArr);