// node wraps our code inside this function and then execute it ,, at runtime our code somwhow looks similar to this 
// function (exports, require, module, __filename, __dirname) {

// console.log(__dirname)
// console.log(__filename)
// var http=require('http');
// var dt=require('./nodetest2');
// var fl=require('fs');
// http.createServer(function(req,res){

// fl.readFile('./nodetest2.js',function(err,data){
// res.writeHead(200, {'Content-Type': 'text/html'});
// res.write(data+" ddddd ");
// res.end();
// });


// }).listen(8082);

var f=5;

var anony=require('./anonymous');

console.log(anony+"  "+f);



var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('nodetest2.js', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data+"aaaaa");
    res.end();
  });
}).listen(8080);



// const eventEmitter=require('events');

// const emitter=new eventEmitter();


// emitter.on('event',() => {

// console.log("listener called ");

// });

// emitter.emit('event');

// const Logger=require('./nodetest2');

// const logger=new Logger.Log();

// logger.on('log',() => {

// console.log("logger invoked");

// });

// logger.log();






























