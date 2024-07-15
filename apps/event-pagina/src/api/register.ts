import client from "./client.ts";

const register = async (data: any) => {
    const res = await client.post('register')
}

export default register;