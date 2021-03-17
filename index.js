    const http = require('http');
    const axios = require('axios');

    http.createServer((req, res)=>{
      res.write("Hello World WASHY \n"); // write a response
      res.end(); //end the response
    }).listen(8000); // listen for requests on port 8000