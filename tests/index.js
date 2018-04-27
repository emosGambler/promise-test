const request = require('request');

var promise1 = new Promise((resolve, reject) => {
	resolve('3');
});
var promise2 = new Promise((resolve, reject) => {
	request('https://http.cat/200', function (error, response, body) {
		console.log('4');
		resolve(response.statusCode);
	});
});
var promise3 = new Promise((resolve, reject) => {
	resolve('5');
});

const scenario = (title, callback) => {
	var promise4 = new Promise((resolve, reject) => {
		resolve(title);
	});
	var promise5 = new Promise((resolve, reject) => {
		callback();
		resolve('2');
	});
	promise4.then(value => {
		console.log(value);
		return promise5;
	}).then(value => {
		console.log(value);
	});
};

scenario('1', () => {
	promise1.then(value => {
		console.log(value);
		return promise2;
	}).then(value => {
		console.log(value);
		return promise3;
	}).then(value => {
		console.log(value);
	});
});