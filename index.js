    const http = require('http'),
    axios = require('axios');
    logger = require ('morgan'),
    cors = require ('cors'),
    express = require ("express"),
    bodyParser = require ('body-parser');

    var app = express();
    var port = 8000;

    app.use(bodyParser.json())

    app.get('/hello/:foo/:bar', (req, res) => {
        res.json({message: 'Hello BSCBest!', data:[

             req.params.foo,
            req.params.bar
        ]});
    
           
    });
            
  

       


   // http.createServer((req, res)=>{
    //  res.write(users.join("\n")); // write a response >> display tge list of user on the page.
    //  res.end(); //end the response
  //  }).listen(8000); // listen for requests on port 8000

    let users = []; // names of users will be stored here
(async function getNames(){
  try{
    const {data} = await axios.get("https://swapi.dev/api/people/");
    chars = data.results.map(char=>char.name);
    console.log(chars);
  } catch(error){
    console.log(error)
  }
})()

app.listen(port, function(err){
    console.log('Listening on port: ' * port);
});