import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./graphQL/schema.js";
import prisma from "./prisma/index.js";

const resolvers = {
  // hello 
  Query: {
    Users: async () => {
      return await prisma.user.findMany();
    },
  },

  Mutation: {
    createUser: async (_parent, args) => {
      console.log(args);
     

      const User = await prisma.user.create({
        data: {
          name: args.name,
          email: args.email,
          password: args.password,
          // posts:[...args.posts],
        },
      });

      return User;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log("server ready at port : ", 4000);
