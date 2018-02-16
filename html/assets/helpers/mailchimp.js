var fs = require('fs');
var config = JSON.parse(fs.readFileSync("../../config.json"));
var api_endpoint = 'https://<dc>.api.mailchimp.com/3.0';
var sslFalse = new Boolean(false);


api_endpoint=api_endpoint.replace('<dc>',config.mailchimp_api_key.after("-"));