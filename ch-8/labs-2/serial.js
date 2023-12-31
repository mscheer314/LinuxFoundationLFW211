"use strict";
const { promisify } = require("util");

const print = (err, contents) => {
  if (err) console.error(err);
  else console.log(contents);
};

const opA = (cb) => {
  setTimeout(() => {
    cb(null, "A");
  }, 500);
};

const opB = (cb) => {
  setTimeout(() => {
    cb(null, "B");
  }, 250);
};

const opC = (cb) => {
  setTimeout(() => {
    cb(null, "C");
  }, 125);
};

const opAPromise = promisify(opA)
const opBPromise = promisify(opB)
const opCPromise = promisify(opC)

// version with promises
// opAPromise().then(resultA => {
//   print(null, resultA)
//   opBPromise().then(resultB => {
//     print(null, resultB)
//     opCPromise().then(resultC => {
//       print(null, resultC)
//     })
//   })
// })

// version with async/await
async function run() {
  const thing1 = await opAPromise(print);
  const thing2 = await opBPromise(print);
  const thing3 = await opCPromise(print);
}

run();
