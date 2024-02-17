const express = require('express');
const mongodb_connect = require('./models/db/mongodb');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const mongoose = require('mongoose');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');

const dotenv = require('dotenv');
dotenv.config();

const SERVER_PORT = process.env.PORT || 4000;

app.use(cors());

async function startServer() {
  try {
    await mongodb_connect();

    const app = express();
    const server = new ApolloServer({ 
        //typeDefs: typeDefs, 
        //resolvers: [resolvers]
        typeDefs,
        resolvers 
    });

    await server.start();
    server.applyMiddleware({ app });

    app.listen({ port: SERVER_PORT }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
  } catch (error) {
    console.log(error);
  }
    
}

startServer();
