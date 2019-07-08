const {find} = require('./countries');

test('passing an empty string, returns an empty array', () => {
    expect(find('')).toEqual([]);
});

test('The array that it returns contains no more than four matches', () => {
    expect(find('b').length <= 4).toBe(true);
});

test('The search is case insensitive', () => {
    expect(find('B')[0] == find('b')[0]).toBe(true);
});

test('If no matching countries, an empty array is returned', () => {
    expect(find('hhhh')).toEqual([]);
});
