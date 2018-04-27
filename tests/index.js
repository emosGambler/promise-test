const request = require('request');

var promise1 = new Promise((resolve, reject) => {
	resolve('1');
});
var promise2 = new Promise((resolve, reject) => {
	request('https://http.cat/200', function (error, response, body) {
		console.log('2');
		resolve(response.statusCode);
	});
});
var promise3 = new Promise((resolve, reject) => {
	resolve('3');
});

promise1.then(value => {
	console.log(value);
	return promise2;
}).then(value => {
	console.log(value);
	return promise3;
}).then(value => {
	console.log(value);
});