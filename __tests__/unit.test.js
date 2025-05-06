// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from "../code-to-unit-test/unit-test-me";

// TODO - Part 2
test("isPhoneNumber - valid cases", () => {
  expect(isPhoneNumber("123-456-7890")).toBe(true);
  expect(isPhoneNumber("(123) 456-7890")).toBe(true);
});

test("isPhoneNumber - invalid cases", () => {
  expect(isPhoneNumber("4567890")).toBe(false);
  expect(isPhoneNumber("abc-def-ghij")).toBe(false);
});

test("isEmail - valid cases", () => {
  expect(isEmail("test_email@example.com")).toBe(true);
  expect(isEmail("user123@domain.org")).toBe(true);
});

test("isEmail - invalid cases", () => {
  expect(isEmail("user@domain")).toBe(false);
  expect(isEmail("user@@domain.com")).toBe(false);
});

test("isStrongPassword - valid cases", () => {
  expect(isStrongPassword("a123")).toBe(true);
  expect(isStrongPassword("Z_1234567890")).toBe(true);
});

test("isStrongPassword - invalid cases", () => {
  expect(isStrongPassword("1abc")).toBe(false);
  expect(isStrongPassword("abc$123")).toBe(false);
});

test("isDate - valid cases", () => {
  expect(isDate("1/1/2020")).toBe(true);
  expect(isDate("12/31/1999")).toBe(true);
});

test("isDate - invalid cases", () => {
  expect(isDate("01-01-2020")).toBe(false);
  expect(isDate("2020/01/01")).toBe(false);
});

test("isHexColor - valid cases", () => {
  expect(isHexColor("#fff")).toBe(true);
  expect(isHexColor("#a1b2c3")).toBe(true);
});

test("isHexColor - invalid cases", () => {
  expect(isHexColor("#1234")).toBe(false);
  expect(isHexColor("xyz")).toBe(false);
});
