const path = require('path');
const express = require('express');

//webpack
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../../webpack.config.js');

//graphql
var typeDefs = require("../imports/api/schema.js")
var resolvers = require("../imports/api/resolvers.js")

var bodyParser = require('body-parser');
var { apolloExpress, graphiqlExpress } = require('apollo-server');
var { makeExecutableSchema } = require('graphql-tools');

//connect database
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/test');

var app = express();

var schema = makeExecutableSchema({typeDefs, resolvers});
var app = express();
app.use('/graphql', bodyParser.json(), apolloExpress({schema}));
app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}));

const compiler = webpack(config);
const middleware = webpackMiddleware(compiler, {
  publicPath: config.output.publicPath,
  contentBase: 'src',
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false
  }
});

app.use(middleware);
app.use(webpackHotMiddleware(compiler));

app.use(express.static(__dirname + '/dist'));
app.get('*', function response(req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(7770, function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.log('Graphql Listening at http://localhost:7770/graphiql');
  console.log('App Listening at http://localhost:7770');
});
