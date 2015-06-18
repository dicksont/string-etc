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

var assert = require('assert');

describe('String.prototype.cram', function() {
  before(function() {
    var strload = require('../node/loader.js');
    strload(['cram']);
  });

  describe('--', function() {
    it("''.cram(8) == ''", function() {
      assert.equal(''.cram(8), '')
    });

    it("' '.cram(8) == ' '", function() {
      assert.equal(' '.cram(8), ' ')
    });

    it("'a'.cram(8) == 'a'", function() {
      assert.equal('a'.cram(8), 'a')
    });

    it("'password'.cram(8) == 'password'", function() {
      assert.equal('password'.cram(8), 'password')
    });

    it("'password'.cram(5) == 'pass…'", function() {
      assert.equal('pass…'.cram(8), 'pass…')
    });

    it("'California'.cram(8) == 'Califor…'", function() {
      assert.equal('California'.cram(8), 'Califor…')
    });

    it("'California'.cram(20) == 'California'", function() {
      assert.equal('California'.cram(20), 'California')
    });
  })

  describe('location', function() {
    it ("'California'.cram(8, { location: 'tail'}) == 'Califor…'", function() {
      assert.equal('California'.cram(8, { location: 'tail' }), 'Califor…');
    });

    it("'California'.cram(8, { location: 'body' }) == 'Cali…nia'", function() {
      assert.equal('California'.cram(8, { location: 'body' }), 'Cali…nia');
    });

    it ("'California'.cram(8, { location: 'head'}) == '…ifornia'", function() {
      assert.equal('California'.cram(8, { location: 'head' }), '…ifornia');
    });
  })


});
