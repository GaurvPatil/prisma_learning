// export const typeDefs = `#graphql
// type User {
//   id: ID!
//   name: String
//   email: String!
//   password: String!
//  posts: [Post]!
// }
// type Post {
//   id: ID!
//   slug: String
//   title: String
//   body: String
// }
// type Query {
//   Users: [User]!
// }
// type Mutation {
//   createUser(name: String, email: String, password: String, posts: [PostInput]): User
// }
// input PostInput {
//     slug: String
//     title: String
//     body: String
// }
// `;
export const typeDefs = `#graphql

type User {
  id: ID!
  name: String
  email: String!
  password: String!

}


type Query {
  Users: [User]!
  
}

type Mutation {
  createUser(name: String, email: String, password: String, ): User
}




`;
