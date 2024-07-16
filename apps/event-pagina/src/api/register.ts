import client from "./client.ts";

interface RegisterData {
    name: string
    email: string
}

const register = async (data: RegisterData) => {
    const res = await client.post('register', data)
}

export default register;