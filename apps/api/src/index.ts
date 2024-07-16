import {Hono} from 'hono'
import { prettyJSON } from 'hono/pretty-json'
import {client} from "./client";

const app = new Hono()

// Middleware
app.use(prettyJSON())

/**
 * Hello World
 */
app.get('/', (c) => {
    return c.text('Hello Hono!')
})

/**
 * Register a new user
 */
app.get('/registrations', async (c) => {
    const users = await client.user.findMany()
    return c.json(users)
})

/**
 * Register a new user
 */
app.post('/register', async (c) => {
    const data = await c.req.json()

    const newUser = await client.user.create({
        data: {
            name: data.name,
            email: data.email
        }
    })

    return c.json(newUser)
})

export default app
