'use strict';

var YoJS = require('../yo.js');

console.log('Trying to check Yo account existence...');

YoJS.checkUsername('', '', 'yojstestaccount', function (err, res, body) {
  if (err) {
    console.log('Error: %s', err);
  } else {
    console.log('Success.');
  }
  console.log('res.statusCode: %s', res.statusCode);
  console.log('body: %s', body);

  var parsedBody = JSON.parse(body);
  if (parsedBody && parsedBody.exists) {
    console.log('Account exists.');
  }
});
