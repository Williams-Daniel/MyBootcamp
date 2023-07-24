import axios from "axios"

const URL = "http://localhost:4646/api/Auth"

export const registerUser = async (data:any)=>{
    try {
        return await axios.post(`${URL}/register`,data).then((res:any)=>{
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}
export const signIn = async (data:any)=>{
    try {
        return await axios.post(`${URL}/signin`,data).then((res:any)=>{
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}