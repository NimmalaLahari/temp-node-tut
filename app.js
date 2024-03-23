//##NPM Command

//npm - global command,comes with node
//npm --version/npm --v
//version for npm- 2 flavors

//1)Install package as a local dependency that means use it only 
//in this particular project
// command:npm i <packageName> where i=install

//2)Install package as a global dependency that means use it in any project
//command:npm install -g <packageName>
//sudo npm install -g <packageName> (mac)

//##First package
//**package.json - manifest file that stores important information 
//about project/package
//**manual approach(create package.json in the root,create properties etc)
//npm init (stepby step, press enter to skip)
//**npm init -y (everything default)

//#**#npm i lodash (a dependency)is just like a utility library specifically used for installation purposes
//#**#npm i <technology name>
//Using lodash.flattenDeep(obj):It recursively flattens the nested array
const _ =require('lodash');
const items =[1,[2,[3,[4]]]];
const newItems=_.flattenDeep(items);
console.log(newItems);
console.log("Hello people");
//output:[1,2,3,4]

//dev dependencies
//npm i nodemon --save-dev/npm i nodemon -D
//npm start
//npm run dev--nodemon
//npm uninstall packageName
