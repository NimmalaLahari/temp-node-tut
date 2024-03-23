//FileSystem module
//It has two flavors:can do synchronously blocking;
//asynchronously non-blocking
//Here is the synchronous way of fs
const { readFileSync,writeFileSync }=require('fs');
console.log('start');
//readFileSync(path,encoding type(default:UTF-8))
const first=readFileSync('./content/first.txt','utf8');
const second=readFileSync('./content/second.txt','utf8');

//console.log(first,second);
//writeFileSync(path,text,flag(append data))
writeFileSync('./content/result-sync.txt',
`Here is the result:${first},${second}`,{flag:'a'});
console.log('done with the task');
console.log('starting the next one');
