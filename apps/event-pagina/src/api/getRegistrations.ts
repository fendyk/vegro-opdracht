import client from "./client.ts";
import {User} from "@repo/db"


const getRegistrations = async () => {
    const res = await client.get('registrations')
    return res.data as User[]
}

export default getRegistrations;