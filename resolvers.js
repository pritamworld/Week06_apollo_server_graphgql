const User = require('./models/User');

const resolvers = {
    Query: {
        hello: () => 'Hello world!',
        getUsers: async () => {
            const users = await User.find();
            return users;
        },
        getUserByFirstName: async (_, { fname }) => {
            const user = await User.find({ "firstname": fname }).select('firstname lastname email');
            console.log(user);
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