// import dependencies and initialize express
const express = require('express');
//const bodyParser = require('body-parser');
//const Cloudant = require('@cloudant/cloudant');
const app = express();

// Connect to Cloudant on IBM Public Cloud
//const cloudant = new Cloudant({ url: 'https://3ba80cff-5997-4a6f-83c2-d0453acd7c78-bluemix.cloudantnosqldb.appdomain.cloud', plugins: { iamauth: { iamApiKey: 'RYAbcfKfUQVlRYHXao1KoKfCpJwmg3RTKv-W1ePWfcP_' } } });
//const ieaDb = cloudant.db.use('electric_vehicle_data');

// enable parsing of http request body
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());

// APIs for electric vehicle data (evd)
// get all data
/*
app.get('/api/evd', function (request, response) {
  var data = [];

  if(!ieaDb) {
    response.json('Cannot connect to Cloudant');
    return;
  }

  ieaDb.list({ include_docs: true }, function(err, body) {
    if (!err) {
      body.rows.forEach(function(row) {
        data.push(row);
      });
      response.json(data);
    }
  });
});
*/

// get data by country
/*
app.get("/api/evd/*", function (request, response) {
  var data = [];

  if(!ieaDb) {
    response.json('Cannot connect to Cloudant');
    return;
  }

  ieaDb.list({ include_docs: true }, function(err, body) {
    if (!err) {
      body.rows.forEach(function(row) {
        if (row.doc.country == request.params[0]) {
          data.push(row);
        }
      });
      response.json(data);
    }
  });
});
*/
// end APIs

app.use(express.static('public'))

// start node server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App available at http://localhost:${port}`);
});

module.exports = app;
