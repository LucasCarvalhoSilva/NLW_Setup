import Fastify from "fastify"
import cors from "@fastify/cors"

import { PrismaClient } from "@prisma/client"

const app = Fastify()
const prisma = new PrismaClient

app.register(cors)

app.get('/hello', async () => {
  const habits = await prisma.Habit.findMany({
    where: {
      title: {
        startsWith: 'Estudar'
      }
    }
  })

  return habits
})

app.listen({
  port: 3333,
}).then(() => {
  console.log('HTTP Server running')
})