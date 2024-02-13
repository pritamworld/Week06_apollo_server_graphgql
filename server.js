const express = require('express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const mongoose = require('mongoose');

const { ApolloServer } = require('apollo-server-express');


//TODO - Replace you Connection String here
const mongodb_atlas_url = 'mongodb+srv://sa:pF5Z8ww9JtATIsp2@cluster0.7wn4nmp.mongodb.net/w2024_comp3133s?retryWrites=true&w=majority';
mongoose.connect(mongodb_atlas_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(success => {
    console.log('Success Mongodb connection')
  }).catch(err => {
    console.log('Error Mongodb connection')
  });

const app = express();
const server = new ApolloServer({ 
    //typeDefs: typeDefs, 
    //resolvers: resolvers
    typeDefs,
    resolvers 
});
async function startServer() {
    await server.start();
    server.applyMiddleware({ app });
}

startServer();
app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);