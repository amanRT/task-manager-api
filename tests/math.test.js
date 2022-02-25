const {
  calculateTip,
  fahrenheitToCelsius,
  celsiusToFahrenheit,
  add,
} = require("../src/math");

test("Should calculate total with tip", () => {
  const total = calculateTip(10, 0.3);
  expect(total).toBe(13);
  // if (total !== 13) {
  //   throw new Error("Total tip should  be 13. Got " + total);
  // }
});
test("Should calculate total with default tip", () => {
  const total = calculateTip(10);
  expect(total).toBe(12.5);
});
test("Should calculate farenheit to calcius", () => {
  const output = fahrenheitToCelsius(32);
  expect(output).toBe(0);
});

test("Should calculate calcius to farenheit", () => {
  const output = celsiusToFahrenheit(0);
  expect(output).toBe(32);
});

// test("Async test demo", (done) => {
//   setTimeout(() => {
//     expect(2).toBe(1);
//     done();
//   }, 2000);
// });
test("Should add two numbers", (done) => {
  add(2, 3).then((sum) => {
    expect(sum).toBe(5);
    done();
  });
});
test("Should add two numbers async/await", async () => {
  const sum = await add(10, 22);
  expect(sum).toBe(32);
});
// test("This should fail", () => {
//   throw new Error("Failure!");
// });
