'use strict';

var YoJS = require('../yo.js');

console.log('Trying to Yo all with a link...');

YoJS.yoAll('', 'b8225208-622d-4cf7-887e-8d77390ded3a', 'https://github.com/Anubisss/yojs', function(err, res, body) {
  if (err) {
    console.log('Error: %s', err);
  } else {
    console.log('Success.');
  }
  console.log('res.statusCode: %s', res.statusCode);
  console.log('body: %s', body);
});
