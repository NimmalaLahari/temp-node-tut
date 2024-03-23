//local
const secret='SUPER SECRET';
//global--can share
const john='john';
const peter='peter';

//console.log(module);

//output
// {
//     id: '.',
//     path: 'C:\\Users\\lavanya\\OneDrive\\Desktop\\Node tutorial',
//     exports: {},
//     filename: 'C:\\Users\\lavanya\\OneDrive\\Desktop\\Node tutorial\\4-firstmodule.js',
//     loaded: false,
//     children: [],
//     paths: [
//       'C:\\Users\\lavanya\\OneDrive\\Desktop\\Node tutorial\\node_modules',
//       'C:\\Users\\lavanya\\OneDrive\\Desktop\\node_modules',
//       'C:\\Users\\lavanya\\OneDrive\\node_modules',
//       'C:\\Users\\lavanya\\node_modules',
//       'C:\\Users\\node_modules',
//       'C:\\node_modules'
//     ]   
//   }

module.exports ={john,peter};