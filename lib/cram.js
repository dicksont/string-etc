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

(function() {

  var cram = function(str, space, opts) {
    space = (space != null)? space : 16;

    if (str.length <= space) return str;

    opts = opts || {}

    if (typeof(opts.replacement) == 'undefined') {
      opts.replacement = '…';
    } else if (opts.replacement == null) {
      opts.replacement = '';
    }

    opts.location = opts.location || 'tail';

    var ellipsisLength = opts.replacement.length;

    if (opts.location == 'head') {
      return opts.replacement + str.substr(-1 * (space - ellipsisLength),space - ellipsisLength);
    } else if (opts.location == 'body') {
      var prelength = Math.ceil((space - ellipsisLength)/2);
      var postlength = Math.floor((space - ellipsisLength)/2);

      return str.substr(0, prelength) + opts.replacement + str.substr(-1 * postlength, postlength);
    } else if (opts.location == 'tail') {
      return str.substr(0, space - ellipsisLength) + opts.replacement;
    } else {
      throw new Error("String.prototype.cram: Invalid value" + opts.location + " for option ellipsisPosition. It can only have the following values: ('head', 'body', 'tail') ");
    }
  }

  if (typeof module !== 'undefined' && module && module.exports) { // Node.js & CommonJS
    module.exports = cram;
  } else { // Browser
    String.prototype.cram = function(space, opts) {
      return cram(this, space, opts);
    }
  }

})();
