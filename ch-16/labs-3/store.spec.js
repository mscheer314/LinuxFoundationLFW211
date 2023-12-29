"use strict";

const store = require("./store");

test("store.js returns an ID with a length of 4", async () => {
	const result = await store(Buffer.alloc(10));
	expect(result.id.length).toBe(4);
});

test("store.js throws an error if a Buffer is not passed in as an argument", async () => {
  expect(async () => {
    await store()
  }).rejects.toThrow()
});
