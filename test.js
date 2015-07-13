'use strict'

var test = require('tape')
var isDefined = require('./')

test(function (t) {
  t.equal(isDefined('window'), 'typeof window !== "undefined"')
  t.end()
})
