A collection of handy String methods that works across the various JavaScript packaging systems, including DOM/Browser, CommonJS/Node.js, and AMD/Require.js.
Methods can be included piecewise. E-mail me if you find a String method that you think should be included because it would be useful for other people as well.

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
strload(['cram']);
```

This should add the methods listed in the array to *String.prototype*.
