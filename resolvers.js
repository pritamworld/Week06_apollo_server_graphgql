
const resolvers = {
    Query: {
        hello: () => 'Hello world!',
        user: () => {
            const user = {
                id: 1,
                username: 'Pritesh',
                email: 'p@p.com'
            }
            return user;
        }
    }
}

module.exports = resolvers;