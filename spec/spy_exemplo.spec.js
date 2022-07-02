const CustomMath = {
  /**
   * @param {number} a
   * @param {number} b
   * @returns a soma de `a` com `b`
   */
  sum: (a, b) => {
    return a + b;
  },
};

describe("Spies", () => {
  it("acompanham um função", () => {
    CustomMath.sum(1, 1);
    spyOn(CustomMath, "sum");
    CustomMath.sum(2, 2);
    CustomMath.sum(3, 3);
    expect(CustomMath.sum).toHaveBeenCalledTimes(2);
  });

  it("deve ser criados e utilizados corretamente", () => {
    const sumSpy = spyOn(CustomMath, 'sum')
    sumSpy.withArgs(1,1).and.returnValue(20);
    sumSpy.withArgs(2,2).and.returnValue(40);
    expect(CustomMath.sum(1,1)).toBe(20);
    expect(CustomMath.sum(2,2)).toBe(40);
  });

  it("devem falhar com chamada não configurada", () => {
    const sumSpy = spyOn(CustomMath, 'sum')
    sumSpy.withArgs(1,0).and.returnValue(1);
    expect(CustomMath.sum(1,0)).toBe(1);
    expect(() => CustomMath.sum(2,1)).toThrowError();
  })
});
