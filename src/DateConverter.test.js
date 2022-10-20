const { parse } = require('./DateConverter');

const clock = {
  now: () => {
    return new Date('2020-05-01T00:00:00.000Z');
  },
};

describe('DateConverter should', () => {
  test('return today', () => {
    const result = parse('2020-05-01T00:00:00.000Z', clock);

    console.log(result);
    expect(result).toEqual(new Date('2020-05-01T00:00:00.000Z'));
  });
});
