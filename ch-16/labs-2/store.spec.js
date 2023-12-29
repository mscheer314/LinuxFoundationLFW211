"use strict";

const store = require("./store.js");

test("[store] returns a ID with a length of 4", (done) => {
	function callback(error, data) {
		if (error) {
			done(error);
			return;
		}
		try {
			expect(data.id.length).toBe(4);
			done();
		} catch (error) {
			done(error);
		}
	}

	store(Buffer.alloc(10), callback)
});
