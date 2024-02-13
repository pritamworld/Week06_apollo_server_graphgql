const User = require('./models/User');

const resolvers = {
    Query: {
        hello: () => 'Hello world!',
        user: () => {
            const user = {
                firstname: 'Pritesh',
                lastname: 'Patel',
                email: 'p@p.com'
            }
            return user;
        }
    },
    Mutation: {
        createUser: async (_, { firstname, lastname, email }) => {
            const user = new User({ firstname, lastname, email });
            await user.save();
            return user;
        }
    }
}

module.exports = resolvers;