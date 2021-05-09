import { getPercentageChange } from '.';

describe('getPercentageChange function', () => {
  it('returns isNegative as false when close === open', () => {
    expect(getPercentageChange(1, 1)).toStrictEqual({
      isNegative: false,
      percentage: '+0 (0.00%)',
    });
  });

  it('returns isNegative as false when close > open with right percentage', () => {
    expect(getPercentageChange(5, 7)).toStrictEqual({
      isNegative: false,
      percentage: '+2 (28.57%)',
    });
  });

  it('returns isNegative as true when close < open with right percentage', () => {
    expect(getPercentageChange(7, 5)).toStrictEqual({
      isNegative: true,
      percentage: '-2 (-40.00%)',
    });
  });
});
