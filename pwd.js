
module.exports = function(cmd){
if (cmd === 'pwd'){
  process.stdout.write(process.cwd());

  process.stdout.write('\nYou typed: ' + cmd);
  process.stdout.write('\nprompt > ');
}
}
