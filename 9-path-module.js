//Filepaths helps us to interact with filepaths easily'
const path=require('path');
//platform specific seperator
console.log(path.sep);
//joining a sequence of path segments
const filepath=path.join('/content','/subfolder','text.txt');
console.log(filepath);
//accessing basename
const base=path.basename(filepath);
console.log(base);
//returning an absolute path
//this can be done using resolve().It accepts a sequence of paths
//(or)path segments and resolves it int an absolute path
const absolute=path.resolve(__dirname,'content','subfolder','text.txt');
console.log(absolute);
