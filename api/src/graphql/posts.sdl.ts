export const schema = gql`
  type Post {
    id: Int!
    title: String!
    body: String!
    createdAt: DateTime!
    numOfComments: Int!
    numOfLikes: Int!
    imageLink: String
  }

  type Query {
    posts: [Post!]! @skipAuth
    post(id: Int!): Post @skipAuth
  }

  input CreatePostInput {
    title: String!
    body: String!
    numOfComments: Int!
    numOfLikes: Int!
    imageLink: String
  }

  input UpdatePostInput {
    title: String
    body: String
    numOfComments: Int
    numOfLikes: Int
    imageLink: String
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post! @requireAuth
    updatePost(id: Int!, input: UpdatePostInput!): Post! @requireAuth
    deletePost(id: Int!): Post! @requireAuth
  }
`
