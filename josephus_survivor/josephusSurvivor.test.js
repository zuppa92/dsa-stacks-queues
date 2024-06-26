const josephusSurvivor = require('./josephusSurvivor');

test('Josephus Survivor Test Cases', () => {
  expect(josephusSurvivor(10, 3)).toBe(4);
  expect(josephusSurvivor(7, 2)).toBe(7);
  expect(josephusSurvivor(5, 1)).toBe(5);
  expect(josephusSurvivor(6, 5)).toBe(1);
});
