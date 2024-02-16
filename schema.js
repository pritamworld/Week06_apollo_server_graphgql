const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type User {
        id: ID!
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
        createNewUser(data: UserInput): User!
    }

    input UserInput {
        firstname: String!
        lastname: String!
        email: String!
    }
`
module.exports = typeDefs;