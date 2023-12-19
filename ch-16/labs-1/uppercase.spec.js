"use strict";

const uppercase = require("./uppercase");

test("[uppercase] converts string to uppercase", () => {
  expect(uppercase("asdf")).toStrictEqual("ASDF");
});
