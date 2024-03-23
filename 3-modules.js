//node uses commonJS library,where everyfile in node is a module(by default)
//Modules-Encapsulated code(only share whatever you want i.e minimum) 
 
const names =require('./4-firstmodule');
const sayHi =require('./5-secondmodule');
const data =require('./6-alternative-flavor');
require('./7-mind-grenade');
//console.log(names);
//output
//{ john: 'john', peter: 'peter' }

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);

//output
//Hello there susan
//Hello there john
//Hello there peter

 console.log(data);