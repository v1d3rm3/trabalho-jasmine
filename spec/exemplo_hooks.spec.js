describe("Hooks", () => {
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

  afterAll(() => {
    console.log("afterAll");
  });
});
