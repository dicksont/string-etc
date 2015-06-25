[![Build Status](https://travis-ci.org/dicksont/string-etc.svg?branch=master)](https://travis-ci.org/dicksont/string-etc)
[![npm version](https://badge.fury.io/js/string-etc.svg)](http://badge.fury.io/js/string-etc)
[![Bower version](https://badge.fury.io/bo/string-etc.svg)](http://badge.fury.io/bo/string-etc)

A collection of handy String methods that works across the various JavaScript packaging systems, including DOM/Browser, CommonJS/Node.js, and AMD/Require.js.
Methods can be included piecewise. E-mail me if you find a String method that you think should be included because it would be useful for other people as well.

## Usage
Accessing these extensions will differ depending on our module system. If we are on *Browser* or *AMD*, we can access these methods directly from an *String* object. For example, we can do:

```javascript
'California'.cram(8) // returns Califor…
```

However, if we are on *CommonJS/Node*, we have to access these methods through a wrapper. So instead of the call above, we would have:

```javascript
string('California').cram(8) // returns Califor…
```

where *string* is a constructed function that wraps around the *string* on which we want to operate:

```javascript
var string = require('array-etc')(['cram']);
```

This extra wrapper is a special arrangement we added on Node, in order to avoid global conflicts with the *Array.prototype* object. We may have other libraries or other versions of this library in our dependency tree. These might add methods to the *Array.prototype* object that we are not aware. We must attach the methods locally to a wrapping function to avoid these potential collisions.

Since unintentional collisions are a lot harder on Browser or with AMD, where the end developer actively controls the loading of the modules, we have not seen a case for extending the wrapping function to these systems.


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

In your file, write
```javascript
var strload = require('string-etc');
var string = strload(['cram']);
```

This creates a custom wrapper function, which you can use to access the individual methods.
