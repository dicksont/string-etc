[![Build Status](https://travis-ci.org/dicksont/string-etc.svg?branch=master)](https://travis-ci.org/dicksont/string-etc)
[![npm version](https://badge.fury.io/js/string-etc.svg)](http://badge.fury.io/js/string-etc)
[![Bower version](https://badge.fury.io/bo/string-etc.svg)](http://badge.fury.io/bo/string-etc)

A collection of handy String methods that works across the various JavaScript packaging systems, including DOM/Browser, CommonJS/Node.js, and AMD/Require.js.
Methods can be included piecewise. E-mail me if you find a String method that you think should be included because it would be useful for other people as well.

## Usage
### Web page
Accessing these extensions will differ depending on our module system. If we are on *Browser* or *AMD*, we can access these methods directly from an *String* object. For example, we can do:

```javascript
'California'.cram(8) // returns Califor…
```

### Node wrapper

However, if we are on *CommonJS/Node*, we can access these methods through a wrapper. So instead of the call above, we would have:

```javascript
string('California').cram(8) // returns Califor…
```

where *string* is a constructed function that wraps around the *string* on which we want to operate:

```javascript
var string = require('array-etc').wrap(['cram']);
```

This extra wrapper is a special arrangement we added on Node, in order to avoid global conflicts with the *String.prototype* object. We may have other libraries or other versions of this library in our dependency tree. Unbeknownst to us, these libraries may add methods of similar names to the *String.prototype* object. We can attach the methods locally to a wrapping function to avoid these potential collisions.

Since unintentional collisions are a lot harder with script tag loads or AMD, where the end developer actively controls the loading of the modules, we have not seen a case for extending the wrapping function to these systems.

### Node loader

Using a wrapper on Node ensures safety. However, it does introduce a speed bump in that a extra function call must be required before the string can be operated. Calls to library methods with a single source string would require nesting.

If safety is not an issue, you can use the direct syntax in Node as well with a loader call. For example:

```javascript
require('array-etc').load(['cram']);
```

This will load **cram** into **String.prototype**

## Installation
### Web page
If you use bower, run
```
bower install string-etc
```

If you use npm, run
```
npm install string-etc
```

Add the corresponding script tag to your page. e.g.

```html
<script src="/bower_components/string-etc/lib/cram.js"></script>
```

### Node
In your shell, run
```shell
npm install string-etc
```

In your file, require the library, and call wrap with the methods you want your wrapper have. For example:
```javascript
var string = require('string-etc').wrap(['cram']);
```

Or if you prefer the direct syntax without wrapping:
```javascript
require('string-etc').load(['cram']);
```
