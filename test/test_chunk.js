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
     require('array-etc').load('equals');
     factory(require('assert'), function() { return require('../node/etc.js').wrap('chunk') });
   } else {

     factory(window.assert, function() { return function(obj) { return obj } });
     mocha.checkLeaks();
     mocha.run();
   }

 })(function(assert, createWrapper) {
   describe('String.prototype.chunk', function() {
     var string;
     before(function() {
       string = createWrapper();
     });

     describe('--', function() {

       it("''.chunk(2) == []", function() {
         assert.ok(string('').chunk(2).equals([]));
       });

       it("'abc'.chunk(0) == []", function() {
         assert.ok(string('abc').chunk(0).equals([]));
       });

       it("'abc'.chunk(1) == ['a', 'b', 'c']", function() {
         assert.ok(string('abc').chunk(1).equals(['a', 'b', 'c']));
       });

       it("'abc'.chunk(2) == ['ab', 'c']", function() {
         assert.ok(string('abc').chunk(2).equals(['ab', 'c']));
       });
     })
   })
});
