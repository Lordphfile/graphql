import { ApolloServer, gql } from 'apollo-server'

const typeDefs = gql`
    type Query {
        helloWorld: String!
    }

    #type Mutations 
`


const server = new ApolloServer({
    typeDefs, //rotas

})

server.listen().then(({ url }) => {
    console.log(`HTTP server running on @${url}`);
})