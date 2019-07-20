import selector from '.'

describe('selector', () => {
  test('works', () => {
    const selector1 = () => 4;
    const selector2 = () => 5;
    const finalSelector = (a, b) => a * b;
    
    expect(selector(
      [selector1, selector2], finalSelector
    )).toBe(20)
  })

  test('is memoized', () => {
    const selector1 = () => 4;
    const selector2 = () => 5;
    const finalSelector = jest.fn()
    selector([selector1, selector2], finalSelector);
    selector([selector1, selector2], finalSelector);
    selector([selector1, () => 6], finalSelector)
    expect(finalSelector).toHaveBeenCalledTimes(2)
  })
})