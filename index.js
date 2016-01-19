var assign = require('lodash.assign');
var mapValues = require('lodash.mapvalues');
var originalAssert = require('assert');
var numcalls = 0;
var finished = undefined;
var assert = assign(function () {
  ++numcalls;
  return originalAssert.apply(this, arguments);
}, mapValues(originalAssert, function (property) {
  return 'function' !== typeof property ? property : function () {
    ++numcalls;
    return property.apply(originalAssert, arguments);
  };
}));
assert.expect = function (count) {
  numcalls = 0;
  expecting = count;
};
assert.finished = function () {
  if (undefined === expecting) {
    return;
  }
  var _expecting = expecting;
  var _numcalls = numcalls;
  expecting = undefined;
  numcalls = 0;
  if (_numcalls !== _expecting) {
    assert.equal(_numcalls, _expecting, 'expected ' + _expecting + ' assertions, but there were ' + _numcalls);
  }
};
module.exports = assert;
