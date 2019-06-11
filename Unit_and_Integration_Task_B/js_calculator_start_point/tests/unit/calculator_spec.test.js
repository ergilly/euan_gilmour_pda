var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
    console.log(document.querySelector('#number1'));
  });

  // write unit tests here in the form of "it should do something..."
  test('it has a sample test', function(){
    expect(true).toBe(true)
  })

  test('add function', function(){
    calculator.previousTotal=1
    calculator.add(4)
    expect(calculator.runningTotal).toBe(5)
  })

  test('subtract function', function(){
    calculator.previousTotal=7
    calculator.subtract(4)
    expect(calculator.runningTotal).toBe(3)
  })

  test('multiply function', function(){
    calculator.previousTotal=3
    calculator.multiply(5)
    expect(calculator.runningTotal).toBe(15)
  })

  test('divide function', function(){
    calculator.previousTotal=21
    calculator.divide(7)
    expect(calculator.runningTotal).toBe(3)
  })

  test('number concat', function(){
    calculator.numberClick(4)
    calculator.numberClick(3)
    expect(calculator.runningTotal).toBe(43)
  })

  test('operator chain', function(){
    calculator.numberClick(5)
    calculator.operatorClick('*')
    calculator.numberClick(2)
    calculator.operatorClick('-')
    calculator.numberClick(3)
    calculator.operatorClick('=')
    expect(calculator.runningTotal).toBe(7)
  })

  test('number concat', function(){
    calculator.numberClick(2)
    calculator.operatorClick('*')
    calculator.numberClick(5)
    calculator.numberClick(7)
    calculator.clearClick()
    calculator.numberClick(5)
    calculator.operatorClick('=')
    expect(calculator.runningTotal).toBe(10)
  })


});
