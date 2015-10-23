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

   var pad = function(str, width, opts) {

     opts = opts || {}
     opts.filler = (opts.filler == null)? ' ' : opts.filler;
     opts.location = opts.location || 'tail';

     width = (width == null)? 16 : width;

     if (str.length > 0) {
       if (opts.location == 'tail') {
         return str + pad('', width - str.length, opts);
       } else if (opts.location == 'head') {
         return pad('', width - str.length, opts) + str;
       }
     }

     if (width < 0) return str;

     var padding = "";

     for (var i=0; i < width; i++) {
        padding += opts.filler.substr(i % opts.filler.length, 1);
     }

     return padding;
   }

   if (typeof module !== 'undefined' && module && module.exports) { // Node.js & CommonJS
     module.exports = pad;
   } else { // Browser
     String.prototype.pad = function(width, opts) {
      return pad(this, width, opts);
     }
   }

 })();
