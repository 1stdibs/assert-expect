"use strict";
var assert = require('../index');
describe("assert-expect", function () {
    it("should expose an expect property that asserts that assert has been called n times since finished was run", function () {
      var exceptionThrown;
      assert(assert.expect);
      assert.finished();
      assert.expect(3);
      try {
        assert.finished();
      } catch (e) {
        exceptionThrown = true;
      }
      assert(exceptionThrown);
      assert.finished();
      assert.expect(2);
      assert(true);
      assert(true);
      assert.finished();
    });
});
