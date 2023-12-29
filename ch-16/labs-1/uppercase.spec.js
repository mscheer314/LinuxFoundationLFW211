"use strict";

const uppercase = require("./uppercase");

test("[uppercase] throws Error if the input is not a string", () => {
  expect(() => uppercase(1).toThrowError(
    Error('input must be a string')
  ))
});

test("[uppercase] converts string to uppercase", () => {
  expect(uppercase("asdf")).toStrictEqual("ASDF");
});


