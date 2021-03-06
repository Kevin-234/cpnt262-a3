const path = require('path');
const express = require('express');
require('dotenv').config();

const app = express();

// The standard HTTP methods

// order matter
// app.use is for using middleware
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

// Do something with form data
app.post('/register',function(request,response){
  console.log(request.body);
  response.send(`<p>Thanks, ${request.body.name}! We'll send newsletter updates to ${request.body.email}.</p>`);
});


app.get('/',function(request,response){
  console.log(request.method);
  response.send({method: 'GET', message: 'Read Data'});
});

// 404 error 
app.use(function(req, res) {
  res.status(404);
  res.send('404: File Not Found');
});

// default 8080, PORT = 8080
const PORT = process.env.PORT || 8080;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});