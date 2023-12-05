'use strict'
const { spawn } = require('child_process')

function exercise (myEnvVar) {
  // TODO return a child process with
  // a single environment variable set 
  // named MY_ENV_VAR. The MY_ENV_VAR 
  // environment variable's value should 
  // be the value of the myEnvVar parameter 
  // passed to this exercise function
  const sp = spawn(process.execPath, ['child.js'], { 
    env: { MY_ENV_VAR: myEnvVar }
  })
  return sp
} 

module.exports = exercise
