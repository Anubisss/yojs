'use strict';

var YoJS = require('../yo.js');

console.log('Trying to Yo...');

YoJS.yo('', '', 'yoteam', '', '', function(err, res, body) {
  if (err) {
    console.log('Error: %s', err);
  } else {
    console.log('Success.');
  }
  console.log('res.statusCode: %s', res.statusCode);
  console.log('body: %s', body);
});
