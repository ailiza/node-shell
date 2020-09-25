module.exports = function(done){
  const cmdElem = cmd.split(' ')
  // if (cmdElem[0] === 'curl'){
    const curl = require('request')

    curl(cmdElem[1], (err, response, body) =>{
      if (err) {
        done('error:', err);
      } else {
        done(body);
      }
    })


  }

//   const request = require('request');
// request('http://www.google.com', function (error, response, body) {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

