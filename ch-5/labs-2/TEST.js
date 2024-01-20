'use strict'

const first = {
  firstFunction: () => {console.log('first function called')}
}

const second = Object.create(first, {
  secondFunction: {value: () => {console.log('second function called')}}
})

const third = Object.create(second, {
  thirdFunction: {value: () => {console.log('third function called')}}
})

const subject = Object.create(third)

subject.firstFunction()
subject.secondFunction()
subject.thirdFunction()