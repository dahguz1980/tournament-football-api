const express = require('express');
const tournaments = require('./routes/tournament.route')
var https = require('https');
var fs = require('fs');
const app = express();
const port = 3000

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');

  /*
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method, x-access-token');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', false);
*/
  // Pass to next layer of middleware
  next();
});

app.use('/ft/api/tournaments/', tournaments)


var https_options = {
    key: fs.readFileSync("ssl/private.key"),
    cert: fs.readFileSync("ssl/certificate.crt"),
    ca: fs.readFileSync('ssl/ca_bundle.crt') 
         
};

https.createServer(https_options,app).listen(port);

/*app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});*/