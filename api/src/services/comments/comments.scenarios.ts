import type { Prisma, Comment } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CommentCreateArgs>({
  comment: {
    jane: {
      data: {
        name: 'Jane Doe',
        body: 'I like trees',
        numOfLikes: 3,
        numOfComments: 4,
        post: {
          create: {
            title: 'Redwood Leaves',
            body: 'The quick brown fox jumped over the lazy dog.',
            numOfComments: 0,
            numOfLikes: 4,
          },
        },
      },
    },
    john: {
      data: {
        name: 'John Doe',
        body: 'Hug a tree today',
        numOfLikes: 3,
        numOfComments: 4,
        post: {
          create: {
            title: 'Root Systems',
            body: 'The five boxing wizards jump quickly.',
            numOfComments: 0,
            numOfLikes: 4,
          },
        },
      },
    },
  },
})

export const postOnly = defineScenario<Prisma.PostCreateArgs>({
  post: {
    bark: {
      data: {
        title: 'Bark',
        body: "A tree's bark is worse than its bite",
        numOfLikes: 0,
        numOfComments: 0,
      },
    },
  },
})

export type StandardScenario = ScenarioData<Comment, 'comment'>
export type PostOnlyScenario = typeof postOnly
