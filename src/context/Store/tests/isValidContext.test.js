import { createContext, createElement } from 'react';
import isValidContext from '../utils/isValidContext';

const testValues = [undefined, null, 0, '', NaN, {}, []];

const truthyTests = testValues.map((e) => ({
  name: `should return true when context is React.createContext(${e})`,
  context: createContext(e),
  expected: true,
}));

const falseyTests = testValues.map((e) => ({
  name: `should return false when context is ${e}`,
  context: e,
  expected: false,
}));

const reactElementTests = testValues.map((e) => ({
  name: `should return false when context is React.creatElement(${e})`,
  context: createElement(e),
  expected: false,
}));

const Tests = [...truthyTests, ...falseyTests, ...reactElementTests];

describe('isValidContext', () => {
  const runTest = ({ name, context, expected }, testNumber) => {
    const testNamePrefix = `Test ${testNumber} - ${name}`;
    return it(testNamePrefix, () => {
      const result = isValidContext(context);
      expect(result).toBe(expected);
    });
  };

  Tests.forEach((test, i) => runTest(test, i));
});
