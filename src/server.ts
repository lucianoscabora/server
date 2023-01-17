import Fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = Fastify()
const prisma = new PrismaClient()

/*
 Método http: Get, Post, Put, Patch, Delete
*/

app.get('/hello', async () => {
    const habits = await prisma.habit.findMany({
        where: {
            title: {
                startsWith: 'Exercitar'
            }
        }
    })
    return habits
});

app.listen({
    port: 3333,
}).then(() => {
    console.log('Http server running!');
})