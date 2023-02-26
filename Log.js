
Log.js
class Log {
    info(message) {
        console.log('Info: ' + message);
    }
    warning(warning) {
        console.log('Warning: ' + warning);
    }
    error(error) { console.log('Error: ' + error); }
};
module.exports = Log
white_check_mark
eyes
raised_hands
server.js

var http = require('http');
let Log = require('./Log')
let log = new Log()
//var server = http.createServer(function(req, res){
//write code here 

// }); 
//server.listen(5000);
log.warning("This is warning")