const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
require('dotenv').config();

const router = require('./routes');
// const queries = require('../database/schema.js'); // Emma's guide

const app = express();
// host the bundle
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(express.static(path.resolve(__dirname, '../dist')));
app.use('/api', router);

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: path.resolve(__dirname, '../dist') });
});
// if data is coming in as an empty object, consider exetneded: true
// Passport middleware
app.use(passport.initialize());
// Passport config
require('../config/passport')(passport);

// DB Config
const db = require('../config/keys').mongoURI;

// router
app.use('/api', router);

// Mongo Connect
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('Mongo DB hath done a connect'))
  .catch((err) => console.log('MonGod said no. This is why: ', err));

// set port where server will listen
const port = process.env.PORT || 3005;

// tell server to listen on predefined port
app.listen(port, () => {
  console.log(`Express server listening on port: ${port}`);
});
