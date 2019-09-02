var http = require('http');

// Options to be used by request 
var options = {
   host: '',
   port: '8081localhost',
   path: '/index.htm'  
};

// Callback function is used to deal with response
var callback = function(err,response) {
   // Continuously update stream with data
   if (err){

      throw new ERR_SOCKET_BAD_PORT(port);
   }
   var body = '';
   response.on('data', function(data) {
      body += data;
   });
   
   response.on('end', function() {
      // Data received completely.
      console.log(body);
   });
}
// Make a request to the server
var req = http.request(options, callback);
req.end();