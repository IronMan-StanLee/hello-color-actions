const hello = require("./hello");
describe("My hello", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("Hola, Mundo, Argentina campeón Mundial de Fútbol 2022!!!");
  });
});
