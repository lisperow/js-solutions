import { get, addPrefix } from '../src/array';

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