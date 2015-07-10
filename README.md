[![Build Status](https://travis-ci.org/dicksont/string-etc.svg?branch=master)](https://travis-ci.org/dicksont/string-etc)
[![npm version](https://badge.fury.io/js/string-etc.svg)](http://badge.fury.io/js/string-etc)
[![Bower version](https://badge.fury.io/bo/string-etc.svg)](http://badge.fury.io/bo/string-etc)

A collection of handy String methods that works across various JavaScript module systems, including:

- Browser script tag
- CommonJS / Node.js
- AMD / Require.js.

Methods can be included piecewise.

## Usage
Accessing these extensions will differ depending on our module system.

### HTML web page
If we are on a vanilla web page or AMD, we can access these methods directly from an *String* object. For example, we can do:

```javascript
'California'.cram(8) // returns Califor…
```

### Node wrapper

However, this type of direct access may lead to conflicts on CommonJS systems like Node. Unlike AMD or web pages, libraries are automatically loaded in Node. We may have other libraries in our dependency tree that add similarly named methods to the same *String.prototype* object. When we call these methods, we may be in fact be calling the function that overwrote ours.

We added a special arrangement on Node to prevent this problem. We create a local wrapper function. Instead of attaching the methods to the global *String.prototype* object, we attach them to this function. We would have:

```javascript
string('California').cram(8) // returns Califor…
```

where *string* is a constructed function that wraps around our String.

```javascript
var string = require('array-etc').wrap(['cram']);
```

Since these kind of unintended collisions are a lot harder with script tag loads or AMD, where the end developer actively controls the loading of the modules, we have not extended the wrapper function to these systems.

### Node loader

The wrapper function on Node guarantees safety. However, it may be harder to manipulate. We need an extra function call for every string operation, and string operations cannot be chained as elegantly.

If safety is not an issue, we can use the direct syntax in Node as well. We just need to call *load* instead of *wrap* in our setup.

For example:

```javascript
require('array-etc').load(['cram']);
```

will load **cram** into **String.prototype**

## Installation
### Web page
If we use Bower, we would run:
```
bower install string-etc
```

If we use npm, we would run:
```
npm install string-etc
```

Then, we add the corresponding script tag to our page. e.g.

```html
<script src="/bower_components/string-etc/lib/cram.js"></script>
```

### Node
In our shell, run:
```shell
npm install string-etc
```

In our file, require *string-etc*.

Call wrap with the methods we desire. For example:
```javascript
var string = require('string-etc').wrap(['cram']);
```

Or call load if we prefer the direct syntax without wrapping:
```javascript
require('string-etc').load(['cram']);
```

# Libraries
### lib/cram.js
## String.prototype.cram(space, opts)
Cram tries to fit a string within a given width, by replacing excess characters with an ellipsis:

For example, suppose we are building a web page that indexes different Objective-C methods. Objective-C has some pretty long function names that might mess up our layout. Using cram, we can shorten these. Let's try a pretty bad case:

```javascript
"splitViewController:willHideViewController:withBarButtonItem:forPopoverController:".cram(); //"splitViewContro…"
```

By default, cram returns a string with max length 16. However, we can adjust this by passing in a number:

```javascript
"splitViewController:willHideViewController:withBarButtonItem:forPopoverController:".cram(8); //"splitVi…"
```

### opts.replacement
The replacement character by default is an ellipsis, but you can use another string. Specify the replacement string, and cram will adjust accordingly.





## Technical Support

E-mail me:
- if you have problems or questions.
- if you find a String method that you think should be included, because it would be useful for others as well.
- if you have an interesting use case that I should consider
