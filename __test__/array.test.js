import _ from 'lodash';
import { 
  get, 
  addPrefix, 
  swap, 
  isContinuousSequence, 
  calculateAverage,
  findIndex
} from '../src/array';

test('get', () => {
  const cities = ['moscow', 'london', 'berlin', 'porto', ''];

  const actual1 = get(cities, 0);
  expect(actual1).toBe(cities[0]);

  const actual2 = get(cities, 2, 'default');
  expect(actual2).toBe(cities[2]);

  const actual3 = get(cities, 5, false);
  expect(actual3).toBe(false);

  const actual4 = get(cities, 5);
  expect(actual4).toBeNull();

  const actual5 = get(cities, 4);
  expect(actual5).toBe('');
});

it('addPrefix', () => {
  const names = ['john', 'smith', 'karl'];

  const actual1 = addPrefix(names, 'Mr');
  const expected1 = ['Mr john', 'Mr smith', 'Mr karl'];
  expect(actual1).toEqual(expected1);

  const actual2 = addPrefix(names, 'Mrs');
  const expected2 = ['Mrs john', 'Mrs smith', 'Mrs karl'];
  expect(actual2).toEqual(expected2);
});

it('calculateAverage', () => {
  const temperatures1 = [37.5, 34, 39.3, 40, 38.7, 41.5];
  expect(calculateAverage(temperatures1)).toBe(38.5);

  const temperatures2 = [36, 37.4, 39, 41, 36.6];
  expect(calculateAverage(temperatures2)).toBe(38);

  const temperatures3 = [];
  expect(calculateAverage(temperatures3)).toBeNull();
});

it('findIndex', () => {
  const temperatures = [37.5, 34, 39.3, 40, 38.7, 41.5];

  expect(findIndex(temperatures, 34)).toBe(1);
  expect(findIndex(temperatures, 40)).toBe(3);
  expect(findIndex(temperatures, 3)).toBe(-1);
});

describe('swap', () => {
  it('to equal', () => {
    const names = ['john', 'smith', 'karl'];
    expect(swap(_.clone(names), 0)).toEqual(names);
    expect(swap(_.clone(names), 2)).toEqual(names);
    expect(swap(_.clone(names), 1)).toEqual(_.clone(names).reverse());
  });

  it('to equal with false', () => {
    const names = ['john', 'smith', false];
    expect(swap(_.clone(names), 1)).toEqual(_.clone(names).reverse());
  });

  it('to equal with undefined', () => {
    const names = ['john', 'smith', undefined];
    expect(swap(_.clone(names), 1)).toEqual(_.clone(names).reverse());
  });

  it('to equal with 0', () => {
    const names = ['john', 'smith', 0];
    expect(swap(_.clone(names), 1)).toEqual(_.clone(names).reverse());
  });

  it('to equal with empty string', () => {
    const names = ['john', 'smith', ''];
    expect(swap(_.clone(names), 1)).toEqual(_.clone(names).reverse());
  });

  it('to equal with null', () => {
    const names = ['john', 'smith', null];
    expect(swap(_.clone(names), 1)).toEqual(_.clone(names).reverse());
  });
});

describe('getSameCount', () => {
  it('should be false', () => {
    expect(isContinuousSequence([])).toBeFalsy();
    expect(isContinuousSequence([7])).toBeFalsy();
    expect(isContinuousSequence([5, 3, 2, 8])).toBeFalsy();
    expect(isContinuousSequence([10, 11, 12, 14, 15])).toBeFalsy();
    expect(isContinuousSequence([10, 11, 11, 12])).toBeFalsy();
  });

  it('should be true', () => {
    expect(isContinuousSequence([0, 1, 2, 3])).toBeTruthy();
    expect(isContinuousSequence([-5, -4, -3])).toBeTruthy();
    expect(isContinuousSequence([10, 11, 12, 13])).toBeTruthy();
  });
});
