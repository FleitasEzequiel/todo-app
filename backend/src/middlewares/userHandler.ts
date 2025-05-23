import {Handler} from "express"
import { decodeAccessToken } from "../utils/jwt"
import { getSession } from "../services/authServices"


//Este es un middleware para obtener la sesión
export const userHandler : Handler = async(req,res,next) =>{
    try {
        const {user} = req.cookies
        if (user === undefined) throw new Error
        const {payload, error} = decodeAccessToken(user)
        if (error)throw Error(error)
        if (payload){
                const sessionInfo = await getSession(payload._id)
                req.body.user = sessionInfo
        }
    } catch (error) {
        req.body.error = {error}
    }
    finally{ next()}
}
