const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// const User = require('./models/userModel.js'); //user is the database data
// const mongoose = require('mongoose');
const data = require('./exampleData.js'); //exampleData is test data

const app = express();

// var MongoClient = require('mongodb').MongoClient
//   , assert = require('assert');

// // Connection URL
// var url = 'mongodb://localhost:27017/myproject';

// // Use connect method to connect to the server
// MongoClient.connect(url, function(err, db) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");

//   db.close();
// });


app.use(express.static(path.join(__dirname, '/../src/client')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/api/waitlist', (req, res) => { //get waitlist
  res.send(data);
  console.log('GET to Server Received!');
});

app.post('/api/waitlist', (req, res) => { //post waitlist
  const waitingUser = req.body;
  const counter = data[data.length - 1].userId + 1;
  waitingUser.userId = counter;
  users.push(waitingUser);
  res.send(data);
  console.log('POST to Server Received!');
});

app.delete('/api/waitlist', (req, res) => {
  const eraseUser = req.body;

  const newusers = users.filter( user => {
    if (eraseUser.name !== user.name) return user;
  });

  users = newusers;
  res.send(data);
});

app.all('*', (req, res) => {
  console.log('still connected to server')
  res.send(console.log('hello world'));
});

app.listen(3000, ()=> {
  console.log('server is online...');
});
