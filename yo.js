'use strict';

var request = require('request');

// The Yo's HTTP API URL.
var YO_API_URL = process.env.YO_API_URL || 'https://api.justyo.co/';
// The Yo account's API key/token for authentication.
var YO_API_TOKEN = process.env.YO_API_TOKEN;

// NOTE: Use '', null or undefined if you don't want to set an optional parameter.


/**
 * yo, POST
 * Yos the targeted Yo user (@yoUsername).
 * If both @yoLink and @yoLocation is null then it will just Yo.
 * If @yoLink is given then it will Yo a link.
 * If @yoLocation is given then it will Yo a GPS location, format: lat,long.
 * Only @yoLink OR @yoLocation can be given but not both.
 * @callback: The callback which will be called when the method is finished.
 *            Parameters of the callback are: err, res, body
 *                                            @err: An error message or null.
 *                                            @res: The response for the HTTP request which made by YoJS.
 *                                            @body: Body of the HTTP response.
 * http://docs.justyo.co/v1.0/docs/yo
 */
module.exports.yo = function(yoApiUrl, yoApiToken, yoUsername, yoLink, yoLocation, callback) {
  // If there is no @yoApiUrl then try to use it from YO_API_URL.
  if (!yoApiUrl) {
    yoApiUrl = YO_API_URL;
  }
  // If there is no @yoApiToken then try to use it from YO_API_TOKEN.
  if (!yoApiToken) {
    yoApiToken = YO_API_TOKEN;
  }
  // Yo usernames should be used in upper case format.
  yoUsername = yoUsername.toUpperCase();

  // Required parameters for the Yo request.
  var yoParams = {
    'api_token': yoApiToken,
    'username': yoUsername
  };
  // Optional parameters.
  if (yoLink) {
    yoParams.link = yoLink;
  }
  if (yoLocation) {
    yoParams.location = yoLocation;
  }

  // Makes the POST request.
  request.post(yoApiUrl + 'yo/', { form: yoParams }, function(err, res, body) {
    setImmediate(callback, err, res, body);
  });
}

/**
 * yoall, POST
 * Yos all of your subscribers.
 * If @yoLink is given then it will Yo all the specified link.
 * http://docs.justyo.co/v1.0/docs/yoall
 */
module.exports.yoAll = function(yoApiUrl, yoApiToken, yoLink, callback) {
  if (!yoApiUrl) {
    yoApiUrl = YO_API_URL;
  }
  if (!yoApiToken) {
    yoApiToken = YO_API_TOKEN;
  }

  var yoParams = {
    'api_token': yoApiToken
  };
  if (yoLink) {
    yoParams.link = yoLink;
  }

  request.post(yoApiUrl + 'yoall/', { form: yoParams }, function(err, res, body) {
    setImmediate(callback, err, res, body);
  });
}

/**
 * accounts, POST
 * Creates new Yo account.
 * Optional parameters: @yoCallbackUrl, @yoEmail, @yoDescription, @yoWelcomeLink
 * http://docs.justyo.co/v1.0/docs/accounts
 */
module.exports.account = function(yoApiUrl, yoApiToken, yoNewAccountUsername, yoNewAccountPasscode, yoCallbackUrl, yoEmail, yoDescription, yoNeedsLocation, yoWelcomeLink, callback) {
  if (!yoApiUrl) {
    yoApiUrl = YO_API_URL;
  }
  if (!yoApiToken) {
    yoApiToken = YO_API_TOKEN;
  }
  yoNewAccountUsername = yoNewAccountUsername.toUpperCase();

  var yoParams = {
    'api_token': yoApiToken,
    'new_account_username': yoNewAccountUsername,
    'new_account_passcode': yoNewAccountPasscode    
  };
  if (yoCallbackUrl) {
    yoParams.callback_url = yoCallbackUrl;
  }
  if (yoEmail) {
    yoParams.email = yoEmail;
  }
  if (yoDescription) {
    yoParams.description = yoDescription;
  }
  if (yoNeedsLocation) {
    yoParams.needs_location = true;
  }
  if (yoWelcomeLink) {
    yoParams.welcome_link = yoWelcomeLink;
  }

  request.post(yoApiUrl + 'accounts/', { form: yoParams }, function(err, res, body) {
    setImmediate(callback, err, res, body);
  });
}

/**
 * check_username, GET
 * Makes a request which response's body contains that the given Yo username exists or not.
 * http://docs.justyo.co/v1.0/docs/check_username
 */
module.exports.checkUsername = function(yoApiUrl, yoApiToken, yoUsername, callback) {
  if (!yoApiUrl) {
    yoApiUrl = YO_API_URL;
  }
  if (!yoApiToken) {
    yoApiToken = YO_API_TOKEN;
  }
  yoUsername = yoUsername.toUpperCase();

  var yoParams = {
    'api_token': yoApiToken,
    'username': yoUsername
  }

  // Makes the GET request.
  request.get(yoApiUrl + 'check_username/', { form: yoParams }, function(err, res, body) {
    setImmediate(callback, err, res, body);
  });
}

/**
 * subscribers_count, GET
 * Makes a request which response's body contains that how many Yo subcribers has the Yo account.
 * http://docs.justyo.co/v1.0/docs/subscribers_count
 */
module.exports.subscribersCount = function(yoApiUrl, yoApiToken, callback) {
  if (!yoApiUrl) {
    yoApiUrl = YO_API_URL;
  }
  if (!yoApiToken) {
    yoApiToken = YO_API_TOKEN;
  }

  request.get(yoApiUrl + 'subscribers_count/', { form: { 'api_token': yoApiToken } }, function(err, res, body) {
    setImmediate(callback, err, res, body);
  });
}
