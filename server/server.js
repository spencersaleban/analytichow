const logger = require('koa-logger');
const Koa = require('koa');
const mount = require('koa-mount');
const graphqlHTTP = require('koa-graphql');
const schema = require('./schema/schema');
const parser = require('koa-bodyparser');
const cors = require('@koa/cors');

const app = new Koa();

app.use(cors());
app.use(mount("/graphql", graphqlHTTP({
  schema,
  graphiql: true
})));

app.use(logger());
app.use(parser());

app.listen(4321);
