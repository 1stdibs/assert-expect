"use strict";
var assert = require('../index');
describe("assert-expect", function () {
    it("should expose an expect property that asserts that assert has been called n times since finished was run", function () {
      var excepcionThrown;
      assert(assert.expect);
      assert.finished();
      assert.expect(3);
      try {
        assert.finished();
      } catch (e) {
        excepcionThrown = true;
      }
      assert(excepcionThrown);
      assert.finished();
      assert.expect(2);
      assert(true);
      assert(true);
      assert.finished();
    });
});
