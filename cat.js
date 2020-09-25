module.exports = function(done,cmd){

  const cmdElem = cmd.split(' ')
  // if (cmdElem[0] === 'cat'){
    const fs = require('fs')

    fs.readFile(cmdElem[1], 'utf8', (err, files) =>{
      if (err) {
        done(err);
      } else {
        done(files);
      }
    })


  }

