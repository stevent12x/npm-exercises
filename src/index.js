
const $ = require('jquery');

const sayHello = () => console.log('Hello');

$('#btn1').on('click', function () {
	$('#heading1').innerHTML('Testing NPM')
})
sayHello();
