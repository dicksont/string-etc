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

   var pad = function(width, opts) {

     opts = opts || {}
     opts.filler = (opts.filler == null)? ' ' : opts.filler;
     opts.location = opts.location || 'tail';

     width = (width == null)? 16 : width;

     if (this.length > 0) {
       if (opts.location == 'tail') {
         return this + pad.call('', width - this.length, opts);
       } else if (opts.location == 'head') {
         return pad.call('', width - this.length, opts) + this;
       }
     }

     if (width < 0) return this;

     var padding = "";

     for (var i=0; i < width; i++) {
        padding += opts.filler.substr(i % opts.filler.length, 1);
     }

     padding = padding.substr(0, width);

     return padding;
   }

   if (typeof module !== 'undefined' && module && module.exports) { // Node.js & CommonJS
     module.exports = pad;
   } else { // Browser
     String.prototype.pad = pad;
   }

 })();
