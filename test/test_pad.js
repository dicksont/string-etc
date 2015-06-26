/*
 * Copyright (c) 2015 Dickson Tam
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 *
 */

 (function(factory) {

   if (typeof module !== 'undefined' && module && module.exports) { // Node.js & CommonJS
     factory(require('assert'), function() { return require('../node/wrapper.js')('pad'); });
   } else {
     factory(window.assert, function() { return function(obj) { return obj; } });
     mocha.checkLeaks();
     mocha.run();
   }

 })(function(assert, createWrapper) {


  describe('String.prototype.pad', function() {

    describe('--', function() {
      var string = createWrapper();

      it("''.pad(2) == '  '", function() {
        assert.equal(string('').pad(2), '  ');
      });

      it("'abc'.pad(5) == 'abc  '", function() {
        assert.equal(string('abc').pad(5), 'abc  ');
      });

      it("'abc'.pad(2) == 'abc'", function() {
        assert.equal(string('abc').pad(5), 'abc  ');

      });
    });

    describe('filler', function() {
      var string = createWrapper();

      it("''.pad(7, { filler: 'xo'}) == 'xoxoxox'", function() {
        assert.equal(string('').pad(7, { filler: 'xo'}), 'xoxoxox');
      });
    });

    describe('location', function() {
      var string = createWrapper();

      it("'abc'.pad(5, { location: 'head'}) == '  abc'", function() {
        assert.equal('abc'.pad(5, { location: 'head'}), '  abc');
      });

      it("'abc'.pad(5, { location: 'tail'}) == 'abc  '", function() {
        assert.equal('abc'.pad(5, { location: 'tail'}), 'abc  ');
      });
    });

  });
});
