import merge from './index';

describe('merge test', () => {
  test('merge normal sorted array', () => {
    const collection1 = [1, 3, 5];
    const collection2 = [2, 4, 6];
    const result1 = merge(collection1, collection2);
    expect(result1).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('merge empty array', () => {
    const result2 = merge([], []);
    expect(result2).toEqual([]);
  });

  test('merge filled array with empty array', () => {
    const result3 = merge([1, 2, 3], []);
    expect(result3).toEqual([1, 2, 3]);
  });

  test('merge array that contains 1 element', () => {
    const result4 = merge([7], [8]);
    expect(result4).toEqual([7, 8]);
  });

  test('merge dupicated array', () => {
    const collection3 = [1, 3, 3, 7];
    const collection4 = [2, 3, 3, 8];
    const result5 = merge(collection3, collection4);
    expect(result5).toEqual([1, 2, 3, 3, 3, 3, 7, 8]);
  });
});
