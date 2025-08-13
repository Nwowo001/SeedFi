import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

function sum(a: number, b: number) {
  return a + b;
}

test("should sum 7 and 17 to get 24 ", () => {
  expect(sum(7, 17)).toBe(24);
});
