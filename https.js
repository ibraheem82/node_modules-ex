















// * In order to use ecma script modules 

// import { send } from './request';
// import { read } from './response';


// * Node treats javaScript file commonJs module by default for backward compatibility 
const request = require('./request');
const response = require('./response');

//  OR
// const internals =  require('../internals');
// const { send } = require('./request');
// const { read } = require('./response');

// function makeRequest(url, data) {
//     send(url, data);
//     read();
// };


// function makeRequest(url, data) {
//     internals.request.send(url, data);
//     return internals.response.read();
// };

function makeRequest(url, data) {
    request.send(url, data);
    return response.read();
};




const responseData = makeRequest('https://google.com', 'hello')
console.log(responseData);

console.log(require.cache);