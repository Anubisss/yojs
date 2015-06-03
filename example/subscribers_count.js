'use strict';

var YoJS = require('../yo.js');

console.log('Trying to create a new Yo account...');

YoJS.subscribersCount('', '', function(err, res, body) {
  if (err) {
    console.log('Error: %s', err);
  } else {
    console.log('Success.');
  }
  console.log('res.statusCode: %s', res.statusCode);
  console.log('body: %s', body);

  var parsedBody = JSON.parse(body);
  // 0 or more subscribers.
  if (parsedBody && (parsedBody.count || parsedBody.count === 0)) {
    console.log('Subscribers count: %s', parsedBody.count);
  }
});
