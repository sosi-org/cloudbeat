'use strict';
// todo: get configs.verbose
console.log(process.platform, '?===', process.argv);
if (process.platform === process.argv[2]) {
   console.log('ok');
   process.exit(0);
} else {
   console.log('assertion failed');
   process.exit(1);
}

/*
usage:
   node statebash/only.js linux
*/

