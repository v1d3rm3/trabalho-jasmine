const isLeapYear = require("../lib/is_leap_year");

/**
 * O `describe` agrupa testes relacionados
 */
describe("Testes para a função soma", () => {
  
  /**
   * Como ocorre com o `describe`, os `specs` que são definidos
   * através do função `it` são um agrupamento de `expectations`.
   */
  it("verifica se soma valores positivos corretamente", () => {
    expect(isLeapYear(2022)).toBe(true);
  });

  
});
