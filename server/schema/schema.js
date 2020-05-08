const graphql = require('graphql');
const User = require('../model/mongo/user');
const App = require('../model/mongo/app');
const Data = require('../model/mongo/data');
const _ = require('lodash');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull
} = graphql;

const AppType = new GraphQLObjectType({
  name: 'App',
  fields: ( ) => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    type: { type: GraphQLString },
    user  : {
      type: UserType,
      resolve(parent, args){
        return app.findById(parent.userId);
      }
    }
  })
});

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: ( ) => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    apps: {
      type: new GraphQLList(AppType),
      resolve(parent, args){
        return App.find({ userId: parent.id });
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    app: {
      type: AppType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args){
        return App.findById(args.id);
      }
    },
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args){
        return User.findById(args.id);
      }
    },
    apps: {
      type: new GraphQLList(AppType),
      resolve(parent, args){
        return App.find({});
      }
    },
    user: {
      type: new GraphQLList(UserType),
      resolve(parent, args){
        return User.find({});
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: UserType,
      args: {
        name: { type: GraphQLString },
        age: { type: GraphQLInt }
      },
      resolve(parent, args){
        let user = new User({
          name: args.name,
          email: args.email
        });
        return user.save();
      }
    },
    addApp: {
      type: AppType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        type: { type: new GraphQLNonNull(GraphQLString) },
       // user: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parent, args){
        let app = new App({
          name: args.name,
          type: args.type,
          userId: args.userId
        });
        return app.save();
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
