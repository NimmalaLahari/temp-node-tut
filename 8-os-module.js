const { log } = require('console');
const os=require('os');

//info about the current user
const user=os.userInfo();
console.log(user);
//output
// {
//     uid: -1,
//     gid: -1,
//     username: 'lavanya',
//     homedir: 'C:\\Users\\lavanya',
//     shell: null
//   }

//##method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);
//output
//The system uptime is 701380.906 seconds

//##Information about current os
const currentOS={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS);
//output
//{
//     name: 'Windows_NT',
//     release: '10.0.22621',
//     totalMem: 7907655680,
//     freeMem: 1650614272
//   }

