// exports.myDateTime=function(){
// return Date();
// };

var eventEmitter=require('events');



class Logger extends eventEmitter{
   
   log(){

   	console.log("invoking function ");
   
   this.emit('log');

   }


}

module.exports.Log=Logger ;
