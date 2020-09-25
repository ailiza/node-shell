//Output a prompt
process.stdout.write('prompt > ');

//The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); //remove the newline

  const done = (output) => {
    if (cmd === 'ls'){
      process.stdout.write('You typed: '+ cmd)
    } else {
      const cmdElem = cmd.split(' ');
        if (cmdElem[0]=== 'cat'){

        }
        if (cmdElem[0]=== 'curl'){

        }

    }

    console.log(output);
    process.stdout.write("prompt > ");
  }


  const pwd = require('./pwd');
  pwd(cmd)

  const ls = require('./ls');
  ls(done);

  const cat = require('./cat');
  cat(done,cmd);

  const curl = require('./curl');
  curl(done);

})
