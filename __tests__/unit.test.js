// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('check if (123) 456-7890 is a number', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('check if (800)800-8000 is a number', () => {
  expect(isPhoneNumber('800 800-8000')).toBe(true);
});
test('check if (123) 456-789 is a number', () => {
  expect(isPhoneNumber('(123) 456-789')).toBe(false);
});
test('check if 8008008000 is a number', () => {
  expect(isPhoneNumber('8008008000')).toBe(false);
});

test('check if lastname@email.com is an email', () => {
  expect(isEmail('lastname@email.com')).toBe(true);
});
test('check if user@ucsd.edu is an email', () => {
  expect(isEmail('user@ucsd.edu')).toBe(true);
});
test('check if lastname@emailcom is an email', () => {
  expect(isEmail('lastname@emailcom')).toBe(false);
});
test('check if userucsd.edu is an email', () => {
  expect(isEmail('userucsd.edu')).toBe(false);
});

test('check if Pa55w0rd is a strong password', () => {
  expect(isStrongPassword('Pa55w0rd')).toBe(true);
});
test('check if R1ck_R011 is a strong password', () => {
  expect(isStrongPassword('R1ck_R011')).toBe(true);
});
test('check if P@55w0rd is a strong password', () => {
  expect(isStrongPassword('P@55w0rd')).toBe(false);
});
test('check if R1ck R011 is a strong password', () => {
  expect(isStrongPassword('R1ck R011')).toBe(false);
});

test('check if 11/11/2011 is a date', () => {
  expect(isDate('11/11/2011')).toBe(true);
});
test('check if 1/1/2001 is a date', () => {
  expect(isDate('1/1/2001')).toBe(true);
});
test('check if 11 11 2011 is a date', () => {
  expect(isDate('11 11 2011')).toBe(false);
});
test('check if 1/1/01 is a date', () => {
  expect(isDate('1/1/01')).toBe(false);
});

test('check if #ffffff is a hex color', () => {
  expect(isHexColor('#ffffff')).toBe(true);
});
test('check if 123 is a hex color', () => {
  expect(isHexColor('123')).toBe(true);
});
test('check if fffff is a hex color', () => {
  expect(isHexColor('fffff')).toBe(false);
});
test('check if #ggg is a hex color', () => {
  expect(isHexColor('#ggg')).toBe(false);
});
