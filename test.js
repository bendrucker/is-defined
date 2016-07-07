'use strict'

var test = require('tape')
var isDefined = require('./')
var undefinedValue
var definedValue = 'hello'

test(function (t) {
  t.equal(isDefined(undefinedValue), false)
  t.equal(isDefined(definedValue), true)
  t.end()
})
