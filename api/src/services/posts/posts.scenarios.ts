import type { Prisma, Post } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PostCreateArgs>({
  post: {
    one: {
      data: {
        title: 'String',
        body: 'String',
        numOfComments: 881118,
        numOfLikes: 4322870,
      },
    },
    two: {
      data: {
        title: 'String',
        body: 'String',
        numOfComments: 2765342,
        numOfLikes: 371736,
      },
    },
  },
})

export type StandardScenario = ScenarioData<Post, 'post'>
