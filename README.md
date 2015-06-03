# YoJS
YoJS is a dead simple Node.js module for the [Yo](http://justyo.co/) API.

[Just Yo](http://justyo.co/) is the simplest and most efficient (zero) communication tool in the world.

YoJS's goal is simplicity. Because of this there is literally no error handling in the module. If something goes wrong then the response (in the callback) of the Yo API contains the error message and gives a non 200 HTTP status code.

[![NPM](https://nodei.co/npm/yojs.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/yojs)

## Install

* directly from the git repository: ```git clone https://github.com/Anubisss/yojs```
* from the [npm](https://www.npmjs.com/) registry: ```npm install yojs```
* from the [bower](http://bower.io/) registry: ```bower install yojs```

## Usage
```javascript
var YoJS = require('yojs');

 // Your Yo account's API token/key.
 // Or you can set it via the YO_API_TOKEN environment variable.
var yoApiToken = '';
console.log('Trying to Yo...');
YoJS.yo('', yoApiToken, 'yoteam', '', '', function(err, res, body) {
  if (err) {
    console.log('Error: %s', err);
  } else {
    console.log('Success.');
  }
  console.log('res.statusCode: %s', res.statusCode);
  console.log('body: %s', body);
  // If you want to parse the body.
  var parsedBody = JSON.parse(body);
});

```

## Examples
Examples for how to use YoJS are in the example directory. You have to set the YO_API_TOKEN environment variable to try out the examples. YO_API_TOKEN have to contain your Yo account's API token/key.

## More details about the API
If you need more details about Yo's API then you should check this out: http://docs.justyo.co/v1.0/docs

## License
The MIT License (MIT)
