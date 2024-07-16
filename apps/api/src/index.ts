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
app.post('/register', async (c) => {

    const data = await c.req.json()

    await client.user.create({
        data: {
            name: data.name,
            email: data.email
        }
    })

    return c.text('Hello Hono!')
})

export default app
