const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type User {
        firstname: String!
        lastname: String!
        email: String!
    }    
    type Query {
        hello: String!
        getUsers: [User]
        getUserByFirstName(fname: String!): [User]
    }

    type Mutation {
        createUser(firstname: String!, lastname: String!, email: String!): User!
    }
`
module.exports = typeDefs;