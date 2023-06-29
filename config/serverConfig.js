const express = require('express');
const path = require('path');
const morgan = require('morgan');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const sessionConfig = require('./sessionConfig');

const ssr = require('../middlewares/ssr');
const getUser = require('../middlewares/getUser');

function serverConfig(app) {
  app.use(session(sessionConfig));
  app.use(express.static(path.join(__dirname, '../public')));
  app.use(morgan('dev'));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cookieParser());
  app.use(getUser);
  app.use(ssr);
}

module.exports = serverConfig;
