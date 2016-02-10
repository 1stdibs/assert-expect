# assert-expect
exposes qunit-style assert.expect

##installation:
```sh
npm install --save assert-expect
```

##usage:
```js
const assert = require('assert-expect');
assert.expect(2);
assert(true);
assert(true);
assert(true);
assert.finished(); // throws exception because 2 asserts were expected, but three were made.
```
