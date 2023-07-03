export const schema = gql`
  type Post {
    id: Int!
    title: String!
    body: String!
    createdAt: DateTime!
    numOfComments: Int!
    numOfLikes: Int!
  }

  type Query {
    posts: [Post!]! @requireAuth
    post(id: Int!): Post @requireAuth
  }

  input CreatePostInput {
    title: String!
    body: String!
    numOfComments: Int!
    numOfLikes: Int!
  }

  input UpdatePostInput {
    title: String
    body: String
    numOfComments: Int
    numOfLikes: Int
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post! @requireAuth
    updatePost(id: Int!, input: UpdatePostInput!): Post! @requireAuth
    deletePost(id: Int!): Post! @requireAuth
  }
`
