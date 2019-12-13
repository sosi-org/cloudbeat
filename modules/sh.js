/*
also see:

https://medium.com/stackfame/how-to-run-shell-script-file-or-command-using-nodejs-b9f2455cb6b7

*/

const shell = require('shelljs')


function sh_run(command) {
  console.log('going to run:', command, '\n');
  store_data(curl_commandline, 'requests.log');
  return new Promise( (acc, rej) =>
  {
      shell.exec(curl_commandline,
        (exitcode, stdout, stderr) => {
          console.log('\n >exitcode:', exitcode, stdout, stderr);
          console.log('\n');
          const resp_obj = JSON.parse(stdout);
          acc(resp_obj);
      }
    );
  });
}

const {split_lines} = require('./modules/templators/splitlines');

function sh(multipline) {
    const lines = split_lines.resolve(multipline);

    let chain = null;
    const pop_task = (last_sh_outcome) => {
      // last_sh_outcome
      const firstline = lines.splice(0,1);
      single_command = firstline;
      return sh_run(single_command);
    }
    // return
    const first_p = new Promise( (acc,rej) => {acc(a2)});
    // pop_task;
    first_p.then(pop_task);
    return first_p;
}

module.exports = {sh_run};

/*
*/
