const express = require('express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const { ApolloServer } = require('apollo-server-express');

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