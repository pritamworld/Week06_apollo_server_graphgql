const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type User {
        id: Int!
        username: String!
        email: String!
    }    
    type Query {
        hello: String!
        user: User!
    }
`
module.exports = typeDefs;