import type { Prisma, Post } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PostCreateArgs>({
  post: {
    one: {
      data: {
        title: 'String',
        body: 'String',
        numOfComments: 4701962,
        numOfLikes: 3793716,
      },
    },
    two: {
      data: {
        title: 'String',
        body: 'String',
        numOfComments: 676261,
        numOfLikes: 5661433,
      },
    },
  },
})

export type StandardScenario = ScenarioData<Post, 'post'>
