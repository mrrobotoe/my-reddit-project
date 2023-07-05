export const schema = gql`
  type Comment {
    id: Int!
    name: String!
    body: String!
    post: Post!
    postId: Int!
    numOfLikes: Int!
    numOfComments: Int!
    createdAt: DateTime!
  }

  type Query {
    comments(postId: Int!): [Comment!]! @skipAuth
  }

  input CreateCommentInput {
    name: String!
    body: String!
    postId: Int!
    numOfLikes: Int!
    numOfComments: Int!
  }

  input UpdateCommentInput {
    name: String
    body: String
    postId: Int
    numOfLikes: Int
    numOfComments: Int
  }

  type Mutation {
    createComment(input: CreateCommentInput!): Comment! @skipAuth
    deleteComment(id: Int!): Comment! @requireAuth
  }
`
