import axios from "axios"

const URL:string = "http://localhost:4646/api"

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