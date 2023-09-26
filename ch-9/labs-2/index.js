// Currently the process crashes. Without removing any of the existing code, and without using
// a try/catch block add some code which stops the process from crashing. When implemented correctly
// the process should output passed!
'use strict'
const { EventEmitter } = require('events')

process.nextTick(console.log, 'passed!')

const ee = new EventEmitter()
ee.on('error', function() {
    process.stdin.resume()
})

ee.emit('error', Error('timeout'))
