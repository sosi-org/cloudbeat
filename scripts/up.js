const sh = require('./modules/sh');
const {expect, assert} = require('chai');


// todo:

sh(`
brew install minikube
minikube start --vm-driver=virtualbox

{{{test}}}

/*test begin*/
minikube status
/*test end*/

{{{body}}}

minikube status|grep -ie "Running\|Configured"|wc -l >state-temp/temp1.tmp
cat state-temp/temp1.tmp | assert4
minikube stop
`)