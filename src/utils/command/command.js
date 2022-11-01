import { calculateExpression, checkValue, validateInput } from "../auxiliaryFn/auxiliaryFn";

class Calculator { // Receiver
  constructor() {
    this.value = '';
    this.history = [];
    this.isShouldClear = false;
    this.isError = false;
  }
}

class CalculatorCommand { // Command
  constructor(calculator, v) {
    this.value = v;
    this.calculator = calculator;
  }
  execute() {
    throw new Error('Command is not implemented');
  }
}

class ClearLastSymbol extends CalculatorCommand { // ConcreteCommand
  execute() {
    this.calculator.value = this.calculator.value.slice(0, -1);
  }
}

class ClearDisplay extends CalculatorCommand { // ConcreteCommand
  execute() {
    this.calculator.value = '';
  }
}

class SetDisplay extends CalculatorCommand { // ConcreteCommand
  execute() {
    const payload = String(this.value);
    if (this.calculator.value.length < 40 && validateInput(this.calculator.value, payload)) {
      if (this.calculator.isShouldClear) {
        this.calculator.value = '';
        this.calculator.isShouldClear = false;
      }
      if (this.calculator.value === '' || this.calculator.isOperatorClicked) {
        this.calculator.value = payload;
      } else {
        this.calculator.value += payload;
      }
    }
  }
}

class GetValue extends CalculatorCommand { // ConcreteCommand
  execute() {
    if (checkValue(this.calculator.value)) {
      const [result, history] = calculateExpression(this.calculator.value)
      this.calculator.value = result
      this.calculator.history.push(history)
      this.calculator.isShouldClear = true
    } else {
      this.calculator.isError = true
    }
  }
}

class Calculate { // Invoker
  constructor() {
    this.commands = [];
  }

  operations(calculator, v) {
    let command;
    switch (v) {
      case '=':
        command = new GetValue(calculator, null)
        break
      case 'C':
        command = new ClearDisplay(calculator)
        break
      case '←':
        command = new ClearLastSymbol(calculator)
        break
      default:
        command = new SetDisplay(calculator, v)
  }
    command.execute();
    this.commands.push(command);
}
}

const calculate = new Calculate();
const calculator = new Calculator();

export const calculatorHandler = (payload) => {
  calculate.operations(calculator, payload);  
}
