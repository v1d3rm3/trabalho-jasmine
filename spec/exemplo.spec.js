describe("Compreendendo estrutura básica", () => {
  /**
   * BeforeAll
   * Vai executar somente uma única vez
   * antes de todos os testes contidos nesse describe.
   *
   * Para iniciar dependências que serão utilizadas
   * durantes os testes desse describe.
   */
  beforeAll(() => {
    console.log("beforeAll");
  });

  beforeEach(() => {
    console.log("beforeEach");
  });

  afterEach(() => {
    console.log("afterEach");
  });

  it("um teste qualquer", () => {
    console.log("TEST: um teste qualquer");
    expect(1).toBe(1);
  });

  it("um teste qualquer 2", () => {
    console.log("TEST: um teste qualquer 2");
    expect(1).toBe(1);
  });

  /**
   * AfterAll
   * Vai executar somente uma única vez
   * após todos os testes contidos nesse describe
   *
   * Normalmente para liberar recursos alocados ao longo
   * do teste, como, por exemplo, abertura de algum
   * arquivo.
   */
  afterAll(() => {
    console.log("afterAll");
  });
});
