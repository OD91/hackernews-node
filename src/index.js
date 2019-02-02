const { GraphQLServer } = require('graphql-yoga')


let links = [{
  id: 'link-0',
  url: 'www.howtographql.com',
  description: 'Fullstack tutorial for GraphQL'
}]

let idCount = links.length
const resolvers = {
  // 1
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: () => links,
  },
  // 2
  Mutation: {
    post: (parent, args) => {
       const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url,
      }
      links.push(link)
      return link
    }
  },
}


const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))
