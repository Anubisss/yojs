'use strict';

var YoJS = require('../yo.js');

console.log('Trying to create a new Yo account...');

YoJS.account('', '', 'yojstestaccount1', 'passwordisyojs', '', '', 'A test account which made with YoJS - https://github.com/Anubisss/yojs', false, 'https://github.com/Anubisss/yojs', function(err, res, body) {
  if (err) {
    console.log('Error: %s', err);
  } else {
    console.log('Success.');
  }
  console.log('res.statusCode: %s', res.statusCode);
  console.log('body: %s', body);
});
